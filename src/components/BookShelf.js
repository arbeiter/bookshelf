import React, { Component } from 'react';
import Book from './Book.js'

class BookShelf extends Component {
  shelveBooks(books, shelf){

        var bookShelf = books.filter(function(el) {
          return (el.shelf === shelf);
        });
        const htmlBooks = bookShelf.map((book, index) => {
                return <Book book={book}/>
        });
        return htmlBooks;
  }

  render() {
    const { books } = this.props;
    const readBooks = this.shelveBooks(books, "read");
    const toReadBooks = this.shelveBooks(books, "wantToRead");
    const currentlyReadingBooks = this.shelveBooks(books, "currentlyReading");

    if (books!==[])
    {
                return (
                        <div>
                                        Currently Reading:
                                        {currentlyReadingBooks}
                                        To Read:
                                        {toReadBooks}
                                        Read:
                                        {readBooks}
                        </div>
                )
     }
     return (<div>No books to read</div>);
  }
}

export default BookShelf;
