import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MsgPushService} from '../services/MsgPushService';
import {Workflow} from '../datatypes/Workflow';
import {MsgPushPage} from '../msg-push/msg-push';

/*
  Generated class for the WorkflowsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/workflows/workflows.html',
  providers: [MsgPushService]
})
export class WorkflowsPage {
	items: Array<Workflow>;
  url: string;
  constructor(private nav: NavController, private msgPushService: MsgPushService ) {
   // this.url = "https://middle-men.herokuapp.com/workflows";
    this.url = "http://localhost:3001/workflows";
  	msgPushService.getMsg(this.url).subscribe(
          data => {
              this.items = [];
              data.forEach((wf) => {
                this.items.push(
                    new Workflow(wf.id['$oid'], wf.workflow_states ,wf.name, wf.description, wf.initial_state_url)
                  );
              });
          },
          err => {
              console.log(err);
          },
          () => console.log('msg retrieved')
      );
  }
   itemTapped(event, item) {
    this.nav.push(MsgPushPage, {
      state_url: item.initial_state_url
    });
  }

}
