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

  modify(temper, shelf) {
    if(shelf == ''){
            return;
    }
    //Find book to modify
    var matchingBook = this.state.books.filter(function(book) {
        return (book.id === temper.id);
    });
    // Set state
    const books = this.state.books;
    BooksAPI.update(temper, shelf).then(()=> {
            if(matchingBook.length==0){
                  BooksAPI.getAll().then((books) => {
                        this.setState({books})
                  })
            }
    });

    var stateCopy = Object.assign({}, this.state);
    if(matchingBook!==[] && matchingBook!=""){
            for(var obj in stateCopy.books){
                if(stateCopy.books[obj].id == temper.id){
                  stateCopy.books[obj].shelf = shelf;
                }
            }
            this.setState({stateCopy});
            return;
    }
  }

  render () {
    return (
      <Router>
        <div className="app">
          <Route exact path='/' render={() => (
            <BookShelf
              books={this.state.books}
              updateShelf={this.modify.bind(this)}
            />
          )}/>
          <Route path='/search' render={() => (
            <SearchBook
              books={this.state.books}
              updateShelf={this.modify.bind(this)}
            />
          )}/>
        </div>
      </Router>
    )
  }
}

export default App
