import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Profile } from "./profile";

afterEach(cleanup);

const props = {
  profile: {
    name: "name",
    job: null,
    character: "character",
    profile_path: "profile_path"
  }
};

describe("Profile", () => {
  it("should display the character", () => {
    const { getByText } = render(<Profile {...props} />);
    expect(getByText("character")).toBeDefined();
  });

  it("should display the job", () => {
    const jobProps = { ...props, profile: { job: "job" } };
    const { getByText } = render(<Profile {...jobProps} />);
    expect(getByText("job")).toBeDefined();
  });

  it("should display the movie poster", () => {
    const { getByAltText } = render(<Profile {...props} />);
    expect(getByAltText("name")).toBeDefined();
  });

  it("should render as expected", () => {
    const { asFragment } = render(<Profile {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
