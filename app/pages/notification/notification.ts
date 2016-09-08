import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NotificationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/notification/notification.html',
})
export class NotificationPage {

	items: Array<{text: string}>;
  constructor(private navCtrl: NavController) {

  	this.items = [
      { text: 'Your membership Renew is due Renew?'},
      { text: 'Your next read Book2 by Author2'},
      { text: 'Your next read Book1 by Author1'}
    ];

  }

  openItem(item){

  }

}
