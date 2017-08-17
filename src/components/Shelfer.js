import React, { Component } from 'react';
import Book from './Book.js'

class Shelfer extends Component {
  shelveBooks(books, shelf, updateShelf){
        var bookShelf = books.filter(function(el) {
          return (el.shelf === shelf);
        });
        const htmlBooks = bookShelf.map((book, index) => {
                return <Book book={book}
                             updateShelf={updateShelf}
                        />
        });
        return htmlBooks;
  }

  render() {
    const { category, books, updateShelf } = this.props;
    return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                         <h2 className="bookshelf-title">{category}</h2>
                          <div className="bookshelf-books">
                            <div className="books-grid">
                                  {this.shelveBooks(books, category, updateShelf)}
                            </div>
                          </div>
                </div>
               </div>
              </div>
    );
  }
}

export default Shelfer;
