import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import YouTube from 'react-youtube';

import { setMovieID } from '../actions/movies.js';
import { options } from '../youtube/video-options.js';

const mapStateToProps = ({ movies }) => ({
  movieID: movies.movieID
});

const actions = {
  setMovieID
};

class SingleMovie extends Component {

  static propTypes = {
    movieID: PropTypes.string.isRequired,
  };

  redirectToMainPage = () => {
    browserHistory.push('/');
    this.props.setMovieID('');
  }

  render() {
    return (
    <div className='wrapper'>
      <div onClick={this.redirectToMainPage} className='back-button'>Back to Search</div>
      <div>
        <YouTube
          videoId={this.props.movieID}
          opts={options}
        />
      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps, actions)(SingleMovie);
