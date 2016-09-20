import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalPage } from '../goal/goal';
import { ReaderboardPage } from '../readerboard/readerboard';
import { HomePage } from '../home/home';
import { WishlistPage } from '../wishlist/wishlist';


/*
  Generated class for the GoalReaderboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/goal-readerboard/goal-readerboard.html',
})
export class GoalReaderboardPage {
	private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private title: string = "Goal";

  constructor(private navCtrl: NavController) {
  	this.tab1Root = GoalPage;
    this.tab2Root = ReaderboardPage;
    this.tab3Root = HomePage;
    this.tab4Root = WishlistPage;

  }

  setTitle(title){
  	this.title = title;
  }

}
