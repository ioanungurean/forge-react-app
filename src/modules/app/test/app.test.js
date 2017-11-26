import React, { Component } from 'react';

import App from '../app.module';

describe('<App />', () => {
  test('should render without throwing an error', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
