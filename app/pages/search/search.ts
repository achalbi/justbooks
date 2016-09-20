import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {FilterPage} from '../search/filter';
import { PopoverController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Books } from '../datatypes/Books';
import { Book } from '../datatypes/Book';


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
  books: Books;
  books_dump: Array<Book>;

  constructor(private navCtrl: NavController, public alertCtrl: AlertController, private popoverCtrl: PopoverController, public modalCtrl: ModalController) {

  	 this.initializeItems();
  }

  initializeItems() {
  	this.books = new Books();
  	this.books_dump = this.books.books_dump;
  }

    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.books_dump = this.books.books_dump.filter((book) => {
        return (book.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



  filter_search(myEvent){
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();

	}
}	