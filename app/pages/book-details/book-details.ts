import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from "../datatypes/Book";
import { Books } from '../datatypes/mock-books';
import { MapUtils } from "../../lib/map-utils"


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


  constructor(private navCtrl: NavController, private navParams: NavParams) {
    
  //  this.book = MapUtils.fromJsonToObj(this.book, navParams.get('book') );
  	this.book = JSON.parse(navParams.get('book'));
  }

}
