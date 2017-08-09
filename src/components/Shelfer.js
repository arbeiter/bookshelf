import React, { Component } from 'react';
import Book from './Book.js'

class Shelfer extends Component {
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
    const { category, books } = this.props;
    return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                         <h2 className="bookshelf-title">Currently Reading</h2>
                          <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                  {this.shelveBooks(books, category)}
                                </li>
                            </ol>
                          </div>
                        </h2>
                </div>
               </div>
              </div>
    );
  }
}

export default Shelfer;
