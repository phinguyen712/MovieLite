const React = require('react'),
  ReactDOM = require('react-dom'),
  {Route, Router, IndexRoute, hashHistory} = require('react-router'),
  {Provider} = require('react-redux'),
  store = require('configureStore').configure();

import Main from 'Main';
import Discover from 'Discover';
import User from 'User';
import Search from 'Search';


// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute  component={Discover}/>
        <Route path='search' component={Search}/>
        <Route path='user' component={User}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
