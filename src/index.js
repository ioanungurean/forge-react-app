import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader';

import App from 'modules/app';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) { module.hot.accept('modules/app', () => { render(App); }); }
