import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'ui/layout';

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

if (module.hot) { module.hot.accept('./modules/app', () => { render(App); }); }
