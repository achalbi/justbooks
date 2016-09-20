import {Book} from './Book';

export class Books {
  book: Book;
  books_dump: Array<Book>;
  images: Array<string>;
  titles: Array<string>;
  authors: Array<string>;
  ratings: Array<string>;

  constructor(){
    this.images = ['http://cdn2.justbooksclc.com/medium/9788189988548.jpg','http://cdn2.justbooksclc.com/medium/9781846042508.jpg','http://cdn2.justbooksclc.com/medium/9780141005959.jpg','http://cdn2.justbooksclc.com/medium/9780751565355.jpg','http://cdn2.justbooksclc.com/medium/9780670089130.jpg'];
    this.titles = ['I Dare','THE LADY AND THE PEACOCK: THE LIFE OF AUNG SAN SUU KYI OF BURMA','LADIES COUPE','HARRY POTTER AND THE CURSED CHILD - PARTS I & II', 'THE GREAT DERANGEMENT: CLIMATE CHANGE AND THE UNTHINKABLE'];
    this.authors = ['Bedi, Kiran','Peter Popham','Nair, Anita','JK Rowling, John Tiffany and Jack Thorne', 'Amitav Ghosh'];
    this.ratings = ['3','4','4.5','3.5', '2'];
    this.books_dump = [];
    for(let i = 0; i < 5; i++) {
      //var index = Math.floor(Math.random() * this.images.length);
      var index = i;
      this.book = new Book('', this.titles[index] , this.ratings[index] , this.images[index] , this.authors[index] ,"");
      this.books_dump.push(this.book);
    }
  }
}