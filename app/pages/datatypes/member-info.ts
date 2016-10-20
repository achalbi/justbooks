
export class MemberInfo {
 // member_plan_id: string;
  //states: Array<State>;
  branch_id: string;
  email: string;
  expiry_date: string;
  membership_no: string;
  plan_id: number;
  plan_name: string;
  address: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  book_returns_count: number;
  version: string;

  constructor( //member_plan_id: string,
         branch_id?: string, email?: string, expiry_date?: string,
  			 membership_no?: string, plan_id?: number, plan_name?: string,
  			  address?: string,
			  first_name?: string,
			  last_name?: string,
			  middle_name?: string,
        locality?: string,
			  city?: string,
			  state?: string,
			  pincode?: string,
			  book_returns_count?: number,
			  version?: string){
  //  this.member_plan_id = member_plan_id;
    this.branch_id = branch_id;
    this.email = email;
    this.expiry_date = expiry_date;
    this.membership_no = membership_no;
    this.plan_id = plan_id;
    this.plan_name = plan_name;
    this.address = address;
	  this.first_name = first_name;
	  this.last_name = last_name;
	  this.middle_name = middle_name;
    this.locality = locality;
	  this.city = city;
	  this.state = state;
	  this.pincode = pincode;
	  this.book_returns_count = book_returns_count;
	  this.version = version;
  }
}
