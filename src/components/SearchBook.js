import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'

class SearchBook extends Component {
  state = {
	  query: "",
  }

  updateQuery(value){
	this.setState({ query: value.trim()});
  }

  filterBooks(books, query){
	var re = new RegExp(query, 'i');
	var matchingBooks = books.filter(function(el) {
	  return el.title.match(re);
	});
	return matchingBooks;
  }

  render() {
    const { books, updateShelf } = this.props;
    var filtered_books = this.filterBooks(books, this.state.query);
        const listMap = filtered_books.map((book, index) => {
                return <Book book={book}
                             updateShelf={updateShelf}/>
        });
        return (
			<div>
				<input
					 type="text"
					 value={this.state.query}
					 onChange={event => this.updateQuery(event.target.value)}
				 >
				</input>
				<div>
				  {listMap}
				</div>
			</div>
    )
  }
}

export default SearchBook
