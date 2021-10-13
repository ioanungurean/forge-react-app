import { render } from "@testing-library/react";

import App from "../App";

describe("AlertCard", () => {
  it("Renders something", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
