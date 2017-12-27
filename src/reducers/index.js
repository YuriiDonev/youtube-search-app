import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movie-reducer.js';

export default combineReducers({
  movies,
  routing: routerReducer
});
