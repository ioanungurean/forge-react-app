import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './title.style.scss';

class Title extends Component {
  render() {
    return (
      <h1 className="title">
        {this.props.title}
      </h1>
    );
  }
};

Title.displayName = 'Title';
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
