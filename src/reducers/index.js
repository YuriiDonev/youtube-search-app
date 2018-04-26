import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import githubData from './github-reducer.js';

export default combineReducers({
  githubData,
  routing: routerReducer
});
