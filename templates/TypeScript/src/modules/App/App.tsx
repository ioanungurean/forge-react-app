import * as React from "react";

import Title from "components/Title/Title";

import "./App.scss";

export default class App extends React.Component {
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
