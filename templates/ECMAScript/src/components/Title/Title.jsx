import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Title.scss";

export default class Title extends Component {
  render() {
    return <span className="title">{this.props.title}</span>;
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};
