import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FilterPage} from '../search/filter';
import { ModalController, LocalStorage, Storage } from 'ionic-angular';
import { Books } from '../datatypes/books';
import { Book } from '../datatypes/book';
import { User } from '../datatypes/user';
import { SearchService } from '../../providers/search-service/search-service'
import { BookDetailsPage } from '../book-details/book-details'


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [SearchService]
})
export class SearchPage {

  searchQuery: string = '';
  books: Books;
  user: User;
  private localStorage: Storage;

  constructor(private navCtrl: NavController, public modalCtrl: ModalController, public searchService: SearchService) {

     this.initializeItems();
  }

  initializeItems() {
    this.books = new Books();
    this.localStorage = new Storage(LocalStorage);
    this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
    }); 
    this.localStorage.get('searched_books').then((books) => {
      if(books != null){
        this.books.books = JSON.parse(books);
      }
    }); 

  

  }

    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchService.search(val.trim(), this.user.membership_no, this.user.authentication_token).then(data => {
        console.log(data);
        this.books.books = data;
        this.localStorage.set('searched_books', JSON.stringify(data));
      });

    }


  }


  showBook(book){
    this.navCtrl.push(BookDetailsPage, { book: JSON.stringify(book)});
  }


  filter_search(myEvent){
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();

  }
}  