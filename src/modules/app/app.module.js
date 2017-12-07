import React, { Component } from 'react';
import Title from 'components/title';

import './app.style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title title="React App - Starter" />
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
