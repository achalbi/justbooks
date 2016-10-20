import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Book } from '../../pages/datatypes/book';
/*
  Generated class for the HomeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeService {
	base_url: string = 'http://localhost:3000/api/v2/'; 
	//base_url: string = 'http://mapi.justbooksclc.com/api/v2/'; 

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


}

