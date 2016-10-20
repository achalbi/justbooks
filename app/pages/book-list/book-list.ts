import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Books } from '../datatypes/books';
import { BookDetailsPage } from '../book-details/book-details';

/*
  Generated class for the BookListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/book-list/book-list.html',
})
export class BookListPage {
	books: Books = new Books();

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  	this.books.books = JSON.parse(navParams.get('books')); 
  }

  showBook(book){
    this.navCtrl.push(BookDetailsPage, { book: JSON.stringify(book)});
  }

}
