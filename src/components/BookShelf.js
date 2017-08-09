import React, { Component } from 'react';
import Book from './Book.js'
import Shelfer from './Shelfer.js'

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
                        <div className="list-books-content">
                          Currently Reading
                          <div className="bookshelf-books">
                                        {currentlyReadingBooks}
                                        To Read:
                                        {toReadBooks}
                                        Read:
                                        {readBooks}
                        </div>
                        </div>
                )
     }
     return (<div>No books to read</div>);
  }
}

export default BookShelf;
