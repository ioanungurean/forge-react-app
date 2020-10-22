import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("AlertCard", () => {
  it("Renders a card with a counter", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
