import axios from "axios";
import { fetchCredits } from "./fetchCredits";

jest.mock("axios");

describe("FetchCredits api", () => {
  it("should fetch successfully data from api", done => {
    // Arrange
    const requestResponse = {
      data: {
        cast: [],
        crew: []
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(requestResponse));

    // Act
    fetchCredits().then(response => {
      // Assert
      expect(response).toEqual(requestResponse.data);
      done();
    });
  });

  it("should return an error message when the request is not successful", done => {
    axios.get.mockImplementation(() => Promise.reject(new Error()));

    // Act
    fetchCredits().catch(error => {
      // Assert
      expect(error.message.startsWith("Could not fetch credits:")).toBeTruthy();
      done();
    });
  });
});
