import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/search/filter.html',
})
export class FilterPage {
	readingTime: string = "any";
	searchFor: string = "any";
	trend: string = "any";
	sortBy: string = "aaz";
  constructor(private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}