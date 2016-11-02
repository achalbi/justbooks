import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '../datatypes/store'
import { HomeService } from '../../providers/home-service/home-service'
import {Geolocation, CallNumber} from 'ionic-native';

/*
  Generated class for the StoreLocationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/store-location/store-location.html',
  providers: [HomeService]
})
export class StoreLocationPage implements OnInit {
	stores: Array<Store> = [];

  constructor(private navCtrl: NavController, private homeService: HomeService) {
  }

  ngOnInit(){
  	this.homeService.get_store_locations().then(data =>{
  		for(let store of data){	 	
				 	store.distance = 0;
				 	this.stores.push(store); 	
			 }
	  	});

  	Geolocation.getCurrentPosition().then(pos => {
		 this.homeService.get_store_locations().then(data =>{
		 	let stores_temp: Array<Store> = [];
			 for(let store of data){	 	
				 	store.distance = this.distance(store.latitude, store.longitude, pos.coords.latitude, pos.coords.longitude, "K");
				 	stores_temp.push(store);
				 	stores_temp.sort(function(a, b){return a.distance - b.distance});
			 }
			 this.stores = stores_temp;
	  	});
		});
		 
  }

  distance(lat1, lon1, lat2, lon2, unit) {
		let radlat1 = Math.PI * lat1/180 ;
		let radlat2 = Math.PI * lat2/180; 
		let theta = lon1-lon2;
		let radtheta = Math.PI * theta/180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515; // defaults to miles
		if (unit=="K") { dist = dist * 1.609344 } // Kilometer
		if (unit=="N") { dist = dist * 0.8684 } // Nautical miles
		return dist;
	}

	callNo(num){
		CallNumber.callNumber(num, false)
	  .then(() => console.log('Launched dialer!'))
	  .catch(() => console.log('Error launching dialer'));
	}

}
