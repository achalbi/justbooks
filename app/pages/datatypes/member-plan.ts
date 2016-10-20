
export class MemberPlan {
  member_plan_id: string;
  //states: Array<State>;
  branch_id: string;
  email: string;
  expiry_date: string;
  membership_no: string;
  plan_id: string;
  plan_name: string;

  constructor( member_plan_id: string, branch_id: string, email: string, expiry_date: string, membership_no: string, plan_id: string, plan_name: string){
    this.member_plan_id = member_plan_id;
    this.branch_id = branch_id;
    this.email = email;
    this.expiry_date = expiry_date;
    this.membership_no = membership_no;
    this.plan_id = plan_id;
    this.plan_name = plan_name;
  }
}
