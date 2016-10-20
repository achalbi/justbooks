import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MemberInfo } from '../../pages/datatypes/member-info';
import { User } from '../../pages/datatypes/user';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

	base_url: string = 'http://localhost:3000/api/v2/'; 
	//base_url: string = 'http://mapi.justbooksclc.com/api/v2/'; 
	data: string;

  constructor(private http: Http) {}


	load(mobile_no) {
	  if (this.data) {
	    // already loaded data
	    return Promise.resolve(this.data);
	  }

	  // don't have the data yet
	  return new Promise(resolve => {
	    // We're using Angular HTTP provider to request the data,
	    // then on the response, it'll map the JSON data to a parsed JS object.
	    // Next, we process the data and resolve the promise with the new data.
	    
	    this.http.get(this.base_url+'sessions.json?phone='+mobile_no)
	      .map(res => res.json())
	      .subscribe(data => {
	        // we've got back the raw data, now generate the core schedule data
	        // and save the data for later reference
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}

	get_auth_token(phone, membership_no, email, member_plan_id): Promise<User> {
			return new Promise(resolve => {
	    this.http.get(this.base_url+'sessions/create_account.json?phone='+phone+"&membership_no="+membership_no+"&email="+email+"member_plan_id"+member_plan_id)
	      .map(res => res.json())
	      .subscribe(data => {
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	
	}

	get_member_info(member_plan_id): Promise<MemberInfo> {
/*	  if (this.data) {
	    // already loaded data
	    return Promise.resolve(this.data);
	  }*/

	  // don't have the data yet
	  return new Promise(resolve => {
	    // We're using Angular HTTP provider to request the data,
	    // then on the response, it'll map the JSON data to a parsed JS object.
	    // Next, we process the data and resolve the promise with the new data.
	    
	    this.http.get(this.base_url+'sessions.json?member_plan_id='+member_plan_id)
	      .map(res => res.json())
	      .subscribe(data => {
	        // we've got back the raw data, now generate the core schedule data
	        // and save the data for later reference
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}


}

