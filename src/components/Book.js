import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {
  selectEventHandler (book, updateShelfFunc, event) {
    var shelf = event.target.value
    var bookId = book.id
    updateShelfFunc(book, shelf)
  }

  getAuthors (book) {
    let authors = []
    if (book.authors) {
      authors = book.authors.join(',')
    }
    return authors
  }

  getIcon (book) {
    if (book && book['imageLinks']) {
      return book['imageLinks']['thumbnail']
    }
    return ''
  }

  render () {
    const { book, updateShelf } = this.props
    var imgTag = this.getIcon(book)
    var authors = this.getAuthors(book)
    return (
      <div className="book" key={book.id}>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imgTag})` }}>
            <div className="book-shelf-changer" >
              <select value={book.shelf}
                onChange={(e) => this.selectEventHandler(book, updateShelf, e)}
              >
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
        </div>

        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {authors}
        </div>
      </div>
    )
  }
}

export default Book
