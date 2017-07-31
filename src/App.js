import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI.js';
import './App.css';

import logo from './logo.svg';

import BookShelf from './components/BookShelf.js'
import SearchBook from './components/SearchBook.js'

class App extends Component {

  state = {
	books: []
  }

  componentDidMount() {
	  BooksAPI.getAll().then((books) => {
		  this.setState( {books} );
	  });
  }

  render() {
    return (
		<Router>
		  <div>
		   <Route exact path='/' render={() => (
			<BookShelf />
			)}/>
		   <Route path='/search' component={SearchBook}/>
          </div>
		</Router>
    );
  }
}

export default App;
