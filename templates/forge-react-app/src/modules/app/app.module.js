import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Title from 'components/title/title.component';

import './app.style.scss';
import cover from 'gui/assets/images/cover.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="app__cover" src={cover} alt="Forge React App"/>
        <a className="app__link"href="https://github.com/ioanungurean/forge-react-app">
          <Title title="Forge React App" />
        </a>
      </div>
    );
  }
}

App.displayName = 'App';
export default hot(module)(App);
