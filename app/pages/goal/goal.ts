import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GoalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/goal/goal.html',
})
export class GoalPage {

  no_of_books: number = 1;
  no_of_months: number = 1;

  constructor(private navCtrl: NavController) {

  }

}
