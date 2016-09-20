import {State} from './State';

export class Workflow {
  id: string;
  states: Array<State>;
  title: string;
  note: string;
  initial_state_url: string;

  constructor( id: string, states: Array<State>, title: string, note: string, initial_state_url: string){
    this.id = id;
    this.states = states;
    this.title = title;
    this.note = note;
    this.initial_state_url = initial_state_url
  }
}