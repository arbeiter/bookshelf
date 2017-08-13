import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

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
    const { books } = this.props;
    var filtered_books = this.filterBooks(books, this.state.query);
    const listMap = filtered_books.map((book, index) => {
					   return <li key={book.id}>
					     <ul>{book.title}</ul>
					   </li>
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
