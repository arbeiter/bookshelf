import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI.js';
import { Link } from 'react-router-dom'

class SearchBook extends Component {
  state = {
	  query: "",
          searchedBooks: []
  }

  updateQuery(value){
	this.setState({ query: value});
        this.filterBooks(value, this.props.updateShelf);
  }

  filterBooks(query, updateShelf){
        if (query === false) {
                return [];
        }

        var cached_books = this.props.books;
        var retVal = [];
        retVal = BooksAPI.search(query, 100).then((books) => {
                if(books) {
                        if(!books.error){
                                var listMap = this.addBooks(books);
                                this.setState({ searchedBooks: listMap});
                        }
                        else{
                          this.setState({ searchedBooks: [] });
                        }
                }
                else {
                        this.setState({ searchedBooks: [] });
                }
        });
  }

  addBooks(fetchedBooks) {
        var bookCache = this.props.books;
        var listMap = fetchedBooks.map((book, i) => {
                //check whether book in bookCache
                var matchedBook = this.props.books.find(x => x.id = book.id);
                if(matchedBook && matchedBook.shelf){
                        return <Book key={i} book = {book}
                                shelf={matchedBook.shelf}
                                updateShelf={this.props.updateShelf}/>
                }
                else{
                        return <Book key={i} book={book}
                                     updateShelf={this.props.updateShelf}/>
                }
                //if included, add shelf to Book

                //else do not add shelf to book
        });
        return listMap;
  }

  render() {
    const { books, updateShelf } = this.props;
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
                <div className="open-search">
                  <li><Link to="/"></Link></li>
                </div>
        </div>
    )
  }
}

export default SearchBook
