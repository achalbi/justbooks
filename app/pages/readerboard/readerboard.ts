import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReaderboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/readerboard/readerboard.html',
})
export class ReaderboardPage {
	location: string = "bangalore";
  constructor(private navCtrl: NavController) {

  }

}
