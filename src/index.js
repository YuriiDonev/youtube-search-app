import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import reducers from './reducers';
import Search from './components/search.js';
import SingleMovie from './components/single-movie.js';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Search} />
      <Route path="/movie/:movieID" component={SingleMovie} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
