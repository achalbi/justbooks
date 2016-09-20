import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MsgPushPage} from '../msg-push/msg-push';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
	first_name: string = "Achal";
	last_name: string = "Indiresh";
	mobile: string = "8105991000";
	email: string = "achal.rvce@gmail.com";
	mem_no: string = "M1017650";
	plan: string = "Basic Plan";
	branch: string = "J.P Nagar";

  constructor(private navCtrl: NavController) {

  }

  openRenew(){
  	this.navCtrl.push(MsgPushPage)
  }

}
