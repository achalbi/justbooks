import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProfileEditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile-edit/profile-edit.html',
})
export class ProfileEditPage {
	first_name: string = "Achal";
	last_name: string = "Indiresh";
	mobile: string = "8105991000";
	email: string = "achal.rvce@gmail.com";
	mem_no: string = "M1017650";
	plan: string = "Basic Plan";
	branch: string = "J.P Nagar";

  constructor(private navCtrl: NavController) {

  }

}
