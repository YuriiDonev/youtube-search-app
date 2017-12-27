import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { setMovieID } from '../actions/movies.js';

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies
});

const actions = {
  setMovieID
};

class MoviesList extends Component {

  static propTypes = {
    movies: PropTypes.array.isRequired,
  };

  setMovie = (id) => {
    this.props.setMovieID(id);
  }

  render() {
    return (
      <div className='movies-container'>
        {this.props.movies.map((movie, index) => {
          return <div className='movie' key={index} onClick={this.setMovie.bind(this, movie.id.videoId)}>
          <Link to={`/movie/${movie.id.videoId}`}><span>
            <div><img src={movie.snippet.thumbnails.medium.url} /></div>
            <div>{movie.snippet.description}</div>
          </span></Link>
          </div>
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(MoviesList);
