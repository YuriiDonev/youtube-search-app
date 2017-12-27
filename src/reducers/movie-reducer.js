import { GET_YOUTUBE_VIDEO, SET_MOVIE_ID } from '../actions/types.js';

const initialState = {
  movies: [],
  movieID: '',
};

const movies = (state = initialState, action) => {
  switch (action.type) {
      case SET_MOVIE_ID: {
        return {
        ...state,
        movieID: action.payload,
        };
      }
      case GET_YOUTUBE_VIDEO: {
        return {
        ...state,
        movies: action.payload,
        };
      }

      default: {
        return state;
      }
    }
  };

export default movies;
