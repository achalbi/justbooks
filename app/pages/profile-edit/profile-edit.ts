import { Component, OnInit } from '@angular/core';
import { NavController, LocalStorage, Storage } from 'ionic-angular';
import { User } from '../datatypes/user';
/*
  Generated class for the ProfileEditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile-edit/profile-edit.html',
})
export class ProfileEditPage implements OnInit{
  user: User = new User(); 
  localStorage: Storage = new Storage(LocalStorage);

  constructor(private navCtrl: NavController) {}

  ngOnInit(){
    this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
    });
  }

}
