import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './app.style';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
    };
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">React App - Starter</h1>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  message: PropTypes.bool,
}
export default App;
