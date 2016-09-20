import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {BookDetailsPage} from '../book-details/book-details';
import {BookListPage} from '../book-list/book-list';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	homeSlideOptions = {
		initialSlide: 0,
		loop: true,
		pager: true
  };
  collectionSlideOptions = {
		loop: false
  };
  constructor(private navCtrl: NavController) {
  }


  showBook(){
    this.navCtrl.push(BookDetailsPage);
  }

  showCollection(){
    this.navCtrl.push(BookListPage);
  }

}
