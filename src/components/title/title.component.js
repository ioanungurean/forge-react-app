import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './title.style.scss';

const Title = (props) => {
  return (
    <h1 className="title">
      {props.title}
    </h1>
  );
};

Title.displayName = 'Title';
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
