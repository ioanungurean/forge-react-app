import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

import App from 'modules/app';

import 'gui/layout';

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

const render = (Component) => {
  ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter} warnings={false}>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) { module.hot.accept('modules/app', () => { render(App); }); }
