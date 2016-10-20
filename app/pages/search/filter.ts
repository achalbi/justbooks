import { Component } from '@angular/core';
import { ViewController, LocalStorage, Storage } from 'ionic-angular';
import { Books } from '../datatypes/books';

@Component({
  templateUrl: 'build/pages/search/filter.html',
})
export class FilterPage {
	readingTime: string = "any";
	searchFor: string = "any";
	trend: string = "any";
	sortBy: string = "any";
	localStorage: Storage;
	books: Books;
  constructor(private viewCtrl: ViewController) {}


  filter(readingTime, searchFor, sortBy){
  	this.localStorage.get('searched_books').then((books) => {
      if(books != null){
        this.books.books = JSON.parse(books);
      }
    });
    if(readingTime != 'any'){
  		// this.books.books = this.books.books.filter((book) => {
    //     	return (book.avg_reading_times.toLowerCase().indexOf(readingTime.toLowerCase()) > -1);
    //   	});
    }

  }
  close() {
    this.viewCtrl.dismiss();
  }
}