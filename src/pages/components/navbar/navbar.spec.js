import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./navbar";

afterEach(cleanup);

describe("Navbar", () => {
  it("should display logo", () => {
    const { getByAltText } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(getByAltText("logo")).toBeDefined();
  });

  it("should render as expected", () => {
    const { asFragment } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
