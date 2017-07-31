import React, { Component } from 'react';

class BookShelf extends Component {
  render() {
	const { books } = this.props;
    const listMap = books.map((book, index) => {
		return <li key={book.id}>
			<ul>{book.title}</ul>
		</li>
	});
	console.log(listMap);
	if (books!==[]){
		return (
			<div>
					Hello World
					{listMap}
			</div>
		)
	 }
	return (<div>No books to read</div>);
 }
}

export default BookShelf;
