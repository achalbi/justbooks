  import { Component } from '@angular/core';
  import { NavController } from 'ionic-angular';
  import { NavParams } from 'ionic-angular';
  import { SpinnerDialog, Push } from 'ionic-native';
  import { TabsPage } from '../tabs/tabs';
  import { LoadingController } from 'ionic-angular';
  import { LoginService } from '../../providers/login-service/login-service';
  import { AlertController } from 'ionic-angular';
  import { ModalController, ViewController, LocalStorage, Storage } from 'ionic-angular';
  import {Validators, FormBuilder, FormGroup } from '@angular/forms';
  import { MemberInfo } from '../datatypes/member-info';
  import { OnInit } from '@angular/core';
  import { User } from '../datatypes/user';


  /*
    Generated class for the LoginPage page.

    See http://ionicframework.com/docs/v2/components/#navigation for more info on
    Ionic pages and navigation.
  */
  @Component({
    templateUrl: 'build/pages/login/login.html',
    providers: [LoginService]
  })
  export class LoginPage implements OnInit  {
    public accounts: any;
    mobile: string = '';
    loginForm: FormGroup;
    mem_account: string = '';
    submitted = false;
    private localStorage: Storage;
    constructor(private navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public loginService: LoginService,
                public alertCtrl: AlertController,
                public modalCtrl: ModalController,
                public formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
          this.loginForm = this.formBuilder.group({
            mobile: ['',  Validators.compose([Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
          });

    }

    presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000,
        dismissOnPageChange: true
      });
      loader.present();
    }

    login(mobile){
    //	this.presentLoading();
      this.selectAccount(mobile);
    //	this.navCtrl.setRoot(TabsPage);
    }


    selectAccount(mobile) {
      this.submitted = true;
      this.localStorage = new Storage(LocalStorage);

        this.loginService.load(mobile).then(data => {
          this.localStorage.set('phone', mobile);
          this.accounts = data;
          this.showModal(data);
          //this.showAccounts(data);
      });
    }

    showModal(data) {
      const modal = this.modalCtrl.create(ChooseAccount, data);
      modal.present();
    }


  }

  @Component({
    templateUrl: 'build/pages/modal/choose-account.html',
    providers: [LoginService]
  })

  class ChooseAccount{
    public data: any;
    public user: User = new User();
    memberInfo: MemberInfo;
    private localStorage: Storage;
    constructor(public viewCtrl: ViewController, public params: NavParams, public loginService: LoginService,
                private navCtrl: NavController,
                public alertCtrl: AlertController) {
      this.data = this.params.data;
    }

   dismiss() {
     this.viewCtrl.dismiss();
   }
     goHome(id){
       this.localStorage = new Storage(LocalStorage);
       this.localStorage.set('member_plan_id', id);
       this.pushReg();
       this.navCtrl.setRoot(TabsPage);
    }

    pushReg(){



    let push = Push.init({
          android: {
            senderID: "959617453751"
          },
          ios: {
            alert: "true",
            badge: false,
            sound: "true"
          },
          windows: {}
        });

        this.localStorage.get('phone').then((phone) =>{
          this.user.phone = phone
        });

       this.localStorage.get('member_plan_id').then((member_plan_id) => {
            this.loginService.get_member_info(member_plan_id).then(data => {
                this.memberInfo = data[0];
                this.localStorage.set('member_info', JSON.stringify(data[0]));
                this.loginService.get_auth_token(this.user.phone, this.memberInfo.membership_no, this.memberInfo.email, member_plan_id ).then(data => {
                        this.user = data;
                        this.user.first_name = this.memberInfo.first_name;
                        this.user.last_name = this.memberInfo.last_name;
                        this.user.plan_name = this.memberInfo.plan_name;
                        this.user.branch_id = this.memberInfo.branch_id;
                        this.localStorage.set('auth_token', this.user.authentication_token );
                        this.localStorage.set('current_user', JSON.stringify(this.user));
                });
            });
        });
        this.localStorage.get('reg_id').then((data) => {
          console.log("reg_id ->", data);
          if(data){
          console.log("reg_id-true ->", data);

          }else{
          console.log("reg_id-false ->", data);
            push.on('registration', (data) => {
              console.log("device token ->", data.registrationId);
              //TODO - send device token to server
               this.localStorage = new Storage(LocalStorage);
               this.localStorage.set('reg_id', data.registrationId);
                    this.localStorage = new Storage(LocalStorage);
                    this.localStorage.get('current_user').then((user) => {
                      this.loginService.push_register( JSON.parse(user).membership_no , data.registrationId).then(data => {
                      });
                  });
            });
            
          }

        });




      }

  }
