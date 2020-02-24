import React from "react";
import { cleanup, render } from "@testing-library/react";
import Details from "./details";

afterEach(cleanup);

const props = {
  credits: {
    cast: [{ cast_id: 1, character: "character", name: "name" }],
    crew: [{ credit_id: 1, job: "job", name: "name" }]
  },
  movieDetails: {
    id: 270,
    title: "Title",
    poster_path: "poster_path",
    release_date: "2020-01-01",
    genres: [{ id: 18, name: "Drama" }]
  }
};

describe("Details", () => {
  it("should have the poster image", () => {
    const { getByAltText } = render(<Details {...props} />);
    expect(getByAltText("Title")).toBeDefined();
  });

  it("should have the title, genres, cast and crew", () => {
    const { getByText } = render(<Details {...props} />);
    expect(getByText("Title")).toBeDefined();
    expect(getByText("Drama")).toBeDefined();
    expect(getByText("job")).toBeDefined();
    expect(getByText("character")).toBeDefined();
  });

  it("should have the correct format date", () => {
    const { getByText } = render(<Details {...props} />);
    expect(getByText("January 1, 2020")).toBeDefined();
  });

  it("should render as expected", () => {
    const { asFragment } = render(<Details {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
