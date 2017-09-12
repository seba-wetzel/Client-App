require('normalize.css/normalize.css');
require('styles/App.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import buscador from './routes/Search'
import crear from './routes/Create'
import editor from './routes/Edit'

import Layout from './layouts/Layout'



// Render the main component into the dom
const main = document.getElementById('main')


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path='/' component={Layout}>
    <IndexRoute component={buscador}/>
    <Route path='editor' component={editor}></Route>
    <Route path='crear' component={crear}></Route>
  </Route>
</Router>, main);
