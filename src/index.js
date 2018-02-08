import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import projects from './content/projects-content';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

ReactDOM.render({App}, document.getElementById('root'));
