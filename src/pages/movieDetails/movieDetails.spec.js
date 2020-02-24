import React from "react";
import { cleanup, render } from "@testing-library/react";
import { MovieDetails } from "./movieDetails";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    movieId: 270
  })
}));

describe("MovieDetails", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<MovieDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
