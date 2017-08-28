import React, { Component } from 'react'
import Book from './Book.js'
import { Link } from 'react-router-dom'
import Shelfer from './Shelfer.js'

class BookShelf extends Component {
  render () {
    const { books, updateShelf } = this.props
    if (books !== []) {
      return (
        <div className="list-books-content">
          <div className="bookshelf-books">
            <Shelfer category="read"
              books={books}
              updateShelf={updateShelf}
            />
            <Shelfer category="wantToRead"
              books={books}
              updateShelf={updateShelf}
            />
            <Shelfer category="currentlyReading"
              books={books}
              updateShelf={updateShelf}
            />
            <div className="open-search">
                <li><Link to="/search"></Link></li>
            </div>
          </div>
        </div>
      )
    }
    return (<div>No books to read</div>)
  }
}

export default BookShelf
