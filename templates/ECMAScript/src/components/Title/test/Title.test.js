import React from "react";
import { shallow } from "enzyme";

import Title from "../Title";

describe("<Title />", () => {
  test("should render without throwing an error", () => {
    const wrapper = shallow(<Title title="Test Title" />);

    expect(wrapper).toMatchSnapshot();
  });
});
