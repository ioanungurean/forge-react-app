import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Title from 'components/title/title.component';

import './app.style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__cover" />
        <a className="app__link"href="https://github.com/ioanungurean/forge-react-app">
          <Title title="Forge React App" />
        </a>
      </div>
    );
  }
}

App.displayName = 'App';
export default hot(module)(App);
