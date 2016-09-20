import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpinnerDialog } from 'ionic-native';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000,
      dismissOnPageChange: true
    });
    loader.present();
  }

  login(event){
  //	this.presentLoading();
  	this.navCtrl.setRoot(TabsPage);
  }


}
