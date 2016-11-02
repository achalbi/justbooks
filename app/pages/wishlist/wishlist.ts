import { Component, OnInit } from '@angular/core';
import { NavController, LocalStorage, Storage, AlertController } from 'ionic-angular';
import { Book } from '../datatypes/book';
import { Books } from '../datatypes/books';
import { User } from '../datatypes/user';
import {BookDetailsPage} from '../book-details/book-details';
import {WishlistService} from '../../providers/wishlist-service/wishlist-service';

/*
  Generated class for the WishlistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/wishlist/wishlist.html',
  providers: [WishlistService]
})
export class WishlistPage implements OnInit {
	books: Books = new Books();
  user: User;
  localStorage: Storage = new Storage(LocalStorage);
  constructor(private navCtrl: NavController, private wishlistService: WishlistService, private alertCtrl: AlertController ) {
  }

  ngOnInit(){

    this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
     this.wishlistService.get_wishlist(this.user.membership_no , this.user.authentication_token).then(data => {
          this.books.books = data;
          console.log(data);
      });
    }); 
  }

  showBook(book){
    this.navCtrl.push(BookDetailsPage, { book: JSON.stringify(book)});
  }

  onPageWillEnter(){
   this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
     this.wishlistService.get_wishlist(this.user.membership_no , this.user.authentication_token).then(data => {
          this.books.books = data;
      });
    }); 
  }

  remove_from_wishlist(title_id, title) {
  let alert = this.alertCtrl.create({
    title: 'Remove Book from Wishlist',
    message: 'Do you really want to remove this book ( '+ title +' ) from your Wishlist?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          
        }
      },
      {
        text: 'Yes',
        handler: () => {
            this.localStorage.get('current_user').then((user) => {
            this.user = JSON.parse(user);
            this.wishlistService.remove_from_wishlist(this.user.phone, this.user.membership_no, this.user.authentication_token, title_id).then(data => {
              //return data;
            });
          }); 
        }
      }
    ]
  });
  alert.present();
}


}
