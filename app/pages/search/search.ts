import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {FilterPage} from '../search/filter';
import { PopoverController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchPage {

	searchQuery: string = '';
  items: string[];

  constructor(private navCtrl: NavController, public alertCtrl: AlertController, private popoverCtrl: PopoverController, public modalCtrl: ModalController) {

  	 this.initializeItems();
  }

  initializeItems() {
  	this.items = [
  		'The Book Theif',
  		'Da vinci code',
  		'The sales room'

  	];
  }

    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  filter(myEvent){
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();

	}
}	