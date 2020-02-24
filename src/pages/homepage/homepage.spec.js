import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Homepage } from "./homepage";

afterEach(cleanup);

describe("Homepage", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
