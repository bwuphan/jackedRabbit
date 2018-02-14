import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import Landing from './components/Landing/Landing';
import Callback from './components/Callback/Callback';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/Callback" component={Callback} />
      </Route>
    </Router>
  </Provider>;

export default Root;