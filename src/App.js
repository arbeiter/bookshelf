import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI.js'
import './App.css'

import BookShelf from './components/BookShelf.js'
import SearchBook from './components/SearchBook.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { books: [] }
    this.modify = this.modify.bind(this)
  }

  componentDidMount () {
	  BooksAPI.getAll().then((books) => {
		  this.setState({books})
	  })
  }

  modify(id, shelf) {
    var book_to_modify = ''
    var stateCopy = Object.assign({}, this.state);

    // Find book in shelves and update server
    var book = BooksAPI.get(id).then((book) => {
      BooksAPI.update(book, shelf);
    })

    // Update local state

    //Find book in state
    var matchingBook = stateCopy.books.filter(function(book) {
        return (book.id === id);
    });

    console.log(matchingBook);
    //If book not in state, add to state copy
    //Add to stateCopy if present
    if(matchingBook!==[] && matchingBook!=""){
            for(var obj in stateCopy.books){
                if(stateCopy.books[obj].id == id){
                  stateCopy.books[obj].shelf = shelf;
                }
            }
            this.setState({stateCopy});
    }
    else {
          var bookToAdd = BooksAPI.get(id).then((book) => {
            stateCopy.books.concat(book);
            this.setState({stateCopy});
          });
    }
  }

  render () {
    return (
      <Router>
        <div className="app">
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
        </div>
      </Router>
    )
  }
}

export default App
