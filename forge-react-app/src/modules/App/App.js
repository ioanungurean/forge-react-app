import React, { Component } from "react";

import Title from "components/Title/Title";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="icon-react" />
          <a href="https://github.com/ioanungurean/forge-react-app">
            <Title title="Forge React App on Github" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
