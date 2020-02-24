import React from "react";
import { cleanup, render } from "@testing-library/react";
import FormFilter from "./formFilter";

afterEach(cleanup);

const props = {
  searchTerm: "title",
  sortTerm: "rating-descending",
  handleSortingChange: jest.fn(),
  handleSearchChange: jest.fn()
};

describe("FormFilter", () => {
  it("should have the title filter", () => {
    const { getByLabelText } = render(<FormFilter {...props} />);
    expect(getByLabelText("Title")).toBeDefined();
  });

  it("should have the sorting select", () => {
    const { getByLabelText } = render(<FormFilter {...props} />);
    expect(getByLabelText("Sort by")).toBeDefined();
  });

  it("should have all the options for select", () => {
    const { getByText } = render(<FormFilter {...props} />);
    expect(getByText("Title Descending")).toBeDefined();
    expect(getByText("Title Ascending")).toBeDefined();
    expect(getByText("Rating Descending")).toBeDefined();
    expect(getByText("Rating Ascending")).toBeDefined();
  });

  it("should render as expected", () => {
    const { asFragment } = render(<FormFilter {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
