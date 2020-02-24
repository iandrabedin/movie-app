import axios from "axios";
import { fetchTopRated } from "./fetchTopRated";

jest.mock("axios");

describe("FetchTopRated api", () => {
  it("should fetch successfully data from api", done => {
    // Arrange
    const requestResponse = {
      data: {
        popularity: 17.227,
        vote_count: 2209,
        video: false,
        poster_path: "/poster_path.jpg",
        id: 19404,
        adult: false,
        backdrop_path: "/backdrop_path.jpg",
        original_language: "en",
        original_title: "",
        genre_ids: [],
        title: "title",
        vote_average: 8.8,
        overview: "",
        release_date: "1995-10-20"
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(requestResponse));

    // Act
    fetchTopRated().then(response => {
      // Assert
      expect(response).toEqual(requestResponse.data);
      done();
    });
  });

  it("should return an error message when the request is not successful", done => {
    axios.get.mockImplementation(() => Promise.reject(new Error()));

    // Act
    fetchTopRated().catch(error => {
      // Assert
      expect(
        error.message.startsWith("Could not fetch top rated movies:")
      ).toBeTruthy();
      done();
    });
  });
});
