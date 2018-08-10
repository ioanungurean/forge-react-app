import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('<Home />', () => {
  test('should render without throwing an error', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
