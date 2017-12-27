import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMovie, getVideosFromYouTube } from '../actions/movies.js';
import MoviesList from './movies-list.js';

const actions = {
  getVideosFromYouTube,
};

class Search extends Component {
	constructor(props) {
	  super(props);
	  this.state = {value: ''};

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	  this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		this.props.getVideosFromYouTube(this.state.value);
	  event.preventDefault();
	}

  render() {
    return (
      <div className='wrapper'>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <label>
              <div className='search-label'>Search on YouTube</div>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className='search-input' type="submit" value="Submit" />
          </form>
        </div>
        <MoviesList />
      </div>
    );
  }
}

export default connect(null, actions)(Search);
