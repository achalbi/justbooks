import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../datatypes/Book';
import { Books } from '../datatypes/Books';


/*
  Generated class for the WishlistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/wishlist/wishlist.html',
})
export class WishlistPage {
	books: Books;

  constructor(private navCtrl: NavController) {
  	this.books = new Books(); 
  }

}
