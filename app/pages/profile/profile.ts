import { Component, OnInit } from '@angular/core';
import { NavController, LocalStorage, Storage } from 'ionic-angular';
import {MsgPushPage} from '../msg-push/msg-push';
import { ProfileEditPage} from '../profile-edit/profile-edit';
import { User } from '../datatypes/user';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage implements OnInit{
  user: User = new User(); 
  localStorage: Storage = new Storage(LocalStorage);

  constructor(private navCtrl: NavController) {}

  ngOnInit(){
    this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
    });
  }

  openRenew(){
  	this.navCtrl.push(MsgPushPage)
  }

  edit_profile(){
  	this.navCtrl.push(ProfileEditPage)
  }

}
