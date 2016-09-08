//import {State} from './State';

export class Book {
  id: string;
  //states: Array<State>;
  title: string;
  rating: string;
  img_url: string;
  author: string;

  constructor( id: string, title: string, rating: string, img_url: string, author: string){
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.img_url = img_url;
    this.author = author;
  }
}