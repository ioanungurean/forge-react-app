import React, { Component } from 'react';
import Title from '../title.component';

describe('<Title />', () => {
  test('should render without throwing an error', () => {
    const wrapper = shallow(<Title title="Test Title" />);

    expect(wrapper).toMatchSnapshot();
  });
});
