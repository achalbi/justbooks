import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Book } from '../../pages/datatypes/book';
import { Store } from '../../pages/datatypes/store';
import { AppSettings } from '../app-settings';
/*
  Generated class for the HomeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeService {
	base_url: string = AppSettings.API_ENDPOINT; 
  data: string;

  constructor(private http: Http) {}

  book_list(list_name): Promise<Array<Book>>{
  	return new Promise(resolve => {
  			this.http.get(this.base_url+list_name+'.json')
	      .map(res => res.json())
	      .subscribe(data => {
	        resolve(data);
	      });
	  });
  }

  get_store_locations(): Promise<Array<Store>>{
  	  	return new Promise(resolve => {
  			this.http.get(this.base_url+'store_locations.json')
	      .map(res => res.json())
	      .subscribe(data => {
	        resolve(data['storelocation']);
	      });
	  });
  }


  push_notification(msg, category_id, title_id, membership_no, api_key): Promise<String> {
      return new Promise(resolve => {
      this.http.get(this.base_url+"push_notifications/push.json?msg="+msg+"&category_id="+category_id+"&title_id="+title_id+"&membership_no="+membership_no+"&api_key="+api_key)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  
  }

}

