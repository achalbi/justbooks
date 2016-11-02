import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Book } from '../../pages/datatypes/book';
import { AppSettings } from '../app-settings';

/*
  Generated class for the WishlistService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WishlistService {
	base_url: string = AppSettings.API_ENDPOINT; 
  //base_url: string = 'http://mapi.justbooksclc.com/api/v2/'; 

  constructor(private http: Http) {}

  get_wishlist( membership_no, api_key): Promise<Array<Book>>{
  	return new Promise(resolve => {
  			this.http.get(this.base_url+'wishlists.json?membership_no='+membership_no+'&api_key='+api_key)
	      .map(res => res.json())
	      .subscribe(data => {
	        resolve(data);
	      });
	  });
  }

   add_to_wishlist( phone, membership_no, api_key, title_id): Promise<string>{
  	return new Promise(resolve => {
        let url = this.base_url+"wishlists/create.json?api_key="+api_key+"&phone="+phone+"&title_id="+title_id+"&membership_no="+membership_no;
  			this.http.post(url, "")
	      .map(res => res.json())
	      .subscribe(data => {
	        resolve(data);
	      });
	  });
  }


   remove_from_wishlist( phone, membership_no, api_key, title_id): Promise<string>{
    return new Promise(resolve => {
        let url = this.base_url+"wishlists/destroy.json?api_key="+api_key+"&phone="+phone+"&title_id="+title_id+"&membership_no="+membership_no;
        this.http.post(url, "")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }


}

