//import {State} from './State';

export class Book {
  id: number;
  //states: Array<State>;
  title: string;
  summary: string;
  image_url: string;
  author: string;
  category: string;
  isbn: string;
  language: string;
  no_of_pages: string;
  avg_reading_times: number;
  no_of_times_rented: number;

  constructor( id?: number, title?: string, summary?: string,
               image_url?: string, author?: string, category?: string,
               isbn?: string, language?: string, no_of_pages?: string,
               avg_reading_times?: number, no_of_times_rented?: number){
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.image_url = image_url;
    this.author = author;
    this.category = category;
    this.isbn = isbn;
    this.language = language;
    this.no_of_pages = no_of_pages;
    this.avg_reading_times = avg_reading_times;
    this.no_of_times_rented = no_of_times_rented;
  }
}