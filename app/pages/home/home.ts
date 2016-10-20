import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {BookDetailsPage} from '../book-details/book-details';
import {BookListPage} from '../book-list/book-list';
import {HomeService} from '../../providers/home-service/home-service';
import { OnInit } from '@angular/core';
import { Book } from '../datatypes/book';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [HomeService]
})
export class HomePage implements OnInit{
  top_rentals_books: Array<Book>;
  new_arrivals_books: Array<Book>;
  your_next_read_books: Array<Book>;
  static top_rentals = 'top_rentals';
  static new_arrivals = 'new_arrivals';
  static your_next_read = 'your_next_read';

	homeSlideOptions = {};
  collectionSlideOptions = {};

  constructor(private navCtrl: NavController, private homeService: HomeService) {
  }


  ngOnInit(): void {

      this.homeSlideOptions = {
        initialSlide: 0,
        loop: true,
        pager: true
      };

      this.collectionSlideOptions = {
        loop: false
      };
      this.homeService.book_list(HomePage.top_rentals).then(data => {
          this.top_rentals_books = data;
      });
      this.homeService.book_list(HomePage.new_arrivals).then(data => {
          this.new_arrivals_books = data;
      });
      this.homeService.book_list(HomePage.your_next_read).then(data => {
          this.your_next_read_books = data;
      });

  }


  showBook(book){
    this.navCtrl.push(BookDetailsPage, { book: JSON.stringify(book)});
  }

  showCollection(book_list){
    console.log(book_list);
    this.navCtrl.push(BookListPage, { books: JSON.stringify(book_list)});
  }

}
