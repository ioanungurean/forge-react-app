import React from 'react';
import { shallow } from 'enzyme';

import About from '../About';

describe('<About />', () => {
  test('should render without throwing an error', () => {
    const wrapper = shallow(<About />);

    expect(wrapper).toMatchSnapshot();
  });
});
