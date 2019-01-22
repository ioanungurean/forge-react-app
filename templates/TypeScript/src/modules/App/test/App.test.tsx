import * as React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("<App />", () => {
  test("should render without throwing an error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
