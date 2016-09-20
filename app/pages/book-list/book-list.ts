import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Books } from '../datatypes/Books';

/*
  Generated class for the BookListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/book-list/book-list.html',
})
export class BookListPage {
	books: Books;

  constructor(private navCtrl: NavController) {
  	this.books = new Books(); 
  }

}
