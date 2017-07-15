import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import Fail from './containers/ResultPage/Fail.js';
import MainHeader from './containers/Header/MainHeader.js';
import Header from './containers/Header/Header.js';
import Form from './containers/Form/Form.js';
import Success from './containers/ResultPage/Success.js';
import { createHashHistory } from 'history';
const history = useRouterHistory(createHashHistory)();

import {
    Router,
    Route,
    IndexRedirect,
    Redirect,
    IndexRoute,
    useRouterHistory,
    Switch,
    Fade,
    Match
} from 'react-router';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path='/' component={App}>
          <IndexRoute components={{header: MainHeader, main: Form}} />
          <Route path="/success" components={{main: Success}} />
          <Route path="/fail" components={{main: Fail}} />
      </Route>
    </Router >

  </Provider>,
  document.getElementById('root')
);
