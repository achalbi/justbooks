//import {State} from './State';

export class Book {
  id: string;
  //states: Array<State>;
  title: string;
  description: string;
  rating: string;
  img_url: string;
  author: string;

  constructor( id: string, title: string, rating: string, img_url: string, author: string, description: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.img_url = img_url;
    this.author = author;
  }
}