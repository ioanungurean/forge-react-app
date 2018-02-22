import React, { Component } from 'react';
import Title from 'components/title';

import './app.style.scss';
import cover from 'gui/assets/images/cover.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="app__cover" src={cover} alt="React App - Starter"/>
        <Title title="React App - Starter" />
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
