
export class User {
  id: number;
  member_plan_id: string;
  email: string;
  membership_no: string;
  phone: string;
  created_at: string;
  updated_at: string;
  authentication_token: string;
  first_name: string;
  last_name: string;
  plan_name: string;
  branch_id: string

  constructor( 
      id?: number,
      member_plan_id?: string,
      email?: string,
      membership_no?: string,
      phone?: string,
      created_at?: string,
      updated_at?: string,
      authentication_token?: string,
      first_name?: string,
      last_name?: string,
      plan_name?: string,
      branch_id?: string

    ){
      this.id = id;
      this.member_plan_id = member_plan_id;
      this.email = email;
      this.membership_no = membership_no;
      this.phone = phone;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.authentication_token = authentication_token;
      this.first_name = first_name;
      this.last_name = last_name;
      this.plan_name = plan_name;
      this.branch_id = branch_id;
  }
}