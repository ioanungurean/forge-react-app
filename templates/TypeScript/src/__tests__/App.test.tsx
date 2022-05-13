import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe("AlertCard", () => {
  it("renders and clicks on something", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);
    await user.click(screen.getByText("React App"));

    expect(container).toMatchSnapshot();
  });
});
