import React, { Component } from 'react';

class SearchBook extends Component {
  state = {
	  query: ""
  }

  updateQuery(value){
	this.setState({ query: value.trim()});
  }

  render() {
	const { books } = this.props;
    return (
			<input
				 type="text"
				 value={this.state.query}
				 onChange={event => this.updateQuery(event.target.value)}
			 >
			</input>
    )
  }
}

export default SearchBook
