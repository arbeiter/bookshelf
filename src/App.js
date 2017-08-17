import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI.js';
import './App.css';

import logo from './logo.svg';

import BookShelf from './components/BookShelf.js'
import SearchBook from './components/SearchBook.js'

class App extends Component {

  constructor(props) {
        super(props);
        this.state = { books: [] };
        this.modify = this.modify.bind(this);
  }

  componentDidMount() {
	  BooksAPI.getAll().then((books) => {
		  this.setState( {books} );
	  });

  }

  modify(id, shelf) {
          var book_to_modify = "";
          console.log(this.state);
          console.log("Before");
          var book = BooksAPI.get(id).then((book) => {
                  BooksAPI.update(book, shelf).then((books) => {
                          BooksAPI.getAll().then((books) => {
                                  this.setState( {books} );
                          });
                  });
          });
  }

  render() {
    return (
		<Router>
                  <div>
                           <Route exact path='/' render={() => (
                                <BookShelf
                                        books={this.state.books}
                                        updateShelf={this.modify}
                                        />
                                )}/>
                           <Route path='/search' render={() => (
                                <SearchBook
                                        books={this.state.books}
                                        updateShelf={this.modify}
                                        />
                                )}/>

                          <div className="open-search">
                           <li><Link to="/search"></Link></li>
                         </div>
                  </div>
                 </Router>
);
}
}

export default App;
