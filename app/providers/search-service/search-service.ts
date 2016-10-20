import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Book } from '../../pages/datatypes/book';

/*
  Generated class for the SearchService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SearchService {
	base_url: string = 'http://localhost:3000/api/v2/'; 

  constructor(private http: Http) {}

  	search(q, membership_no, api_key): Promise<Array<Book>> {
			return new Promise(resolve => {
	    this.http.get(this.base_url+'search.json?q='+q+"&membership_no="+membership_no+"&api_key="+api_key)
	      .map(res => res.json())
	      .subscribe(data => {
	        resolve(data);
	      });
	  });
	
	}

}

