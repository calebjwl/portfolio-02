import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
,
document.getElementById('root'));
