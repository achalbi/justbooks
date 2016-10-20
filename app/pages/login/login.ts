import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { SpinnerDialog } from 'ionic-native';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service/login-service';
import { AlertController } from 'ionic-angular';
import { ModalController, ViewController, LocalStorage, Storage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MemberInfo } from '../datatypes/member-info';
import { OnInit } from '@angular/core';


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

      this.loginService.load(mobile).then(data => {
        this.accounts = data;
        this.showModal(data);
        this.localStorage = new Storage(LocalStorage);
        this.localStorage.set('phone', mobile);
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
  memberInfo: MemberInfo;
  private localStorage: Storage;
  constructor(public viewCtrl: ViewController, public params: NavParams, public loginService: LoginService, private navCtrl: NavController) {
    this.data = this.params.data;
  }

 dismiss() {
   this.viewCtrl.dismiss();
 }
   goHome(id){
     this.localStorage = new Storage(LocalStorage);
     this.localStorage.set('member_plan_id', id);
     this.navCtrl.setRoot(TabsPage);
  }
}
