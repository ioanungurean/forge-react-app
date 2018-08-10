import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Title from 'components/Title/Title';

import Home from 'modules/Home/Home';
import About from 'modules/About/About';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app__header">
            <div className="app__icon--react" />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <a href="https://github.com/ioanungurean/forge-react-app">
              <Title title="Forge React App on Github" />
            </a>
          </div>

          <div className="app__content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

App.displayName = 'App';
export default hot(module)(App);
