import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from "../datatypes/Book";
import { Books } from '../datatypes/Books';


/*
  Generated class for the BookDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/book-details/book-details.html',
})
export class BookDetailsPage {
	book: Book;
	books: Books;

  constructor(private navCtrl: NavController) {
  	this.books = new Books;
  	var index = Math.floor(Math.random() * 4);
  	this.book = this.books.books_dump[index];
  	this.book.description = "This is an Awesome Book";
  }

}
