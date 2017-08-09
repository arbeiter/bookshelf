import React, { Component } from 'react';

class Book extends Component {

  render() {
   const { book } = this.props;
   const imgTag = book["imageLinks"]["thumbnail"];
   const authors = book.authors.join(",");
   return (
        <div className="book">
              <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imgTag})` }}>
                       </div>
              </div>

              <div className="book-title">
                 {book.title}
               </div>
               <div className="book-authors">
                 {authors}
               </div>
        </div>
    );
  }
}

export default Book;
