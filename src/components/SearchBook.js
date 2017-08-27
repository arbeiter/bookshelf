import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI.js';

class SearchBook extends Component {
  state = {
	  query: "",
          searchedBooks: []
  }


  updateQuery(value){
	this.setState({ query: value});
  }

  filterBooks(query, updateShelf){
        if (query === false) {
                return [];
        }

        var retVal = [];
        retVal = BooksAPI.search(query, 100).then((books) => {
                if(books) {
                        var listMap = books.map((book) => {
                                        return <Book book={book}
                                                     updateShelf={updateShelf}/>
                        });
                        this.setState({ searchedBooks: listMap});
                }
                else {
                        this.setState({ searchedBooks: [] });
                }
        });
  }

  render() {
    const { books, updateShelf } = this.props;
    const listMap = this.filterBooks(this.state.query, updateShelf);
    return (
        <div className="search-books">
                <input
                         type="text"
                         placeholder="Search by title or author"
                         value={this.state.query}
                         onChange={event => this.updateQuery(event.target.value)}
                 >
                </input>
                <div className="search-book-results">
                  <div className="books-grid">
                        {this.state.searchedBooks}
                  </div>
                </div>
        </div>
    )
  }
}

export default SearchBook
