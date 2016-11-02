import {Component} from '@angular/core';
import {NavController, LocalStorage, Storage, AlertController} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {BookDetailsPage} from '../book-details/book-details';
import {BookListPage} from '../book-list/book-list';
import {HomeService} from '../../providers/home-service/home-service';
import {WishlistService} from '../../providers/wishlist-service/wishlist-service';
import { OnInit } from '@angular/core';
import { Book } from '../datatypes/book';
import { User } from '../datatypes/user';
import { Toast, Push } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [HomeService, WishlistService]
})
export class HomePage implements OnInit{
  top_rentals_books: Array<Book>;
  new_arrivals_books: Array<Book>;
  your_next_read_books: Array<Book>;
  static top_rentals = 'top_rentals';
  static new_arrivals = 'new_arrivals';
  static your_next_read = 'your_next_read';
  user: User = new User;
  localStorage: Storage = new Storage(LocalStorage);

	homeSlideOptions = {};
  collectionSlideOptions = {};

  constructor(private navCtrl: NavController, private homeService: HomeService, public wishlistService: WishlistService, public alertCtrl: AlertController ) {
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

          let push = Push.init({
          android: {
            senderID: "959617453751"
          },
          ios: {
            alert: "true",
            badge: false,
            sound: "true"
          },
          windows: {}
        });




        push.on('notification', (data) => {
          console.log('message', data.message);
          let self = this;
          //if user using app and push notification comes
          if (data.additionalData.foreground) {
            // if application open, show popup
            let confirmAlert = this.alertCtrl.create({
              title: 'New Notification',
              message: data.message,
              buttons: [{
                text: 'Ignore',
                role: 'cancel'
              }, {
                text: 'View',
                handler: () => {
                  //TODO: Your logic here
                  //this.navCtrl.setRoot(TabsPage);
                  self.navCtrl.push(BookListPage, {books: JSON.stringify(this.top_rentals_books)});
                }
              }]
            });
            confirmAlert.present();
          } else {
            //if user NOT using app and push notification comes
            //TODO: Your logic on click of push notification directly
            //this.navCtrl.setRoot(TabsPage);
             self.navCtrl.push(BookListPage, {books: JSON.stringify(this.top_rentals_books)});
            console.log("Push notification clicked");
          }
        });
        push.on('error', (e) => {
          console.log(e.message);
        });

  }


  addToWishList(title_id, title){

/*        Toast.show("Added to Wishlist Successfully", 'short', 'bottom').subscribe(
            toast => {
              
            }
          );*/


    let alert = this.alertCtrl.create({
    title: 'Add to Wishlist',
    message: 'Do you really want to add this book ( '+ title +' ) to your Wishlist?',
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
            this.wishlistService.add_to_wishlist(this.user.phone, this.user.membership_no, this.user.authentication_token, title_id).then(data => {
              //return data;
            });
          }); 
        }
      }
    ]
  });
  alert.present();
  }


  showBook(book){
    this.navCtrl.push(BookDetailsPage, { book: JSON.stringify(book)});
  }

  showCollection(book_list){
      this.navCtrl.push(BookListPage, { books: JSON.stringify(book_list)});
      this.localStorage.get('current_user').then((user) => {
            this.user = JSON.parse(user);
            this.homeService.push_notification("hello test msg", 1, 295271, this.user.membership_no, this.user.authentication_token);
            });
  }


}
