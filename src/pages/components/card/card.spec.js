import React from "react";
import { cleanup, render } from "@testing-library/react";
import Card from "./card";

afterEach(cleanup);

const props = {
  handleSelectedMovie: jest.fn(),
  poster: "",
  title: "movie title",
  date: "1995",
  overview: "overview",
  rating: 88,
  id: 270,
};

describe("Card", () => {
  it("should display all data", () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText("movie title")).toBeDefined();
    expect(getByText("1995")).toBeDefined();
    expect(getByText("88")).toBeDefined();
  });

  it("should have the more button", () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText("More info")).toBeDefined();
  });

  it("should render as expected", () => {
    const { asFragment } = render(<Card {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
