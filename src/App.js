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
    // Find book in shelves and update locally
    var book = BooksAPI.get(id).then((book) => {
      BooksAPI.update(book, shelf);
    })

    var stateCopy = Object.assign({}, this.state);
    for(var obj in this.state.books){
        if(this.state.books[obj].id == id){
          this.state.books[obj].shelf = shelf;
        }
    }
    this.setState({stateCopy});
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
