import axios from "axios";
import { fetchDetails } from "./fetchDetails";

jest.mock("axios");

describe("FetchDetails api", () => {
  it("should fetch successfully data from api", (done) => {
    // Arrange
    const requestResponse = {
      data: {
        adult: false,
        backdrop_path: "/backdrop_path.jpg",
        belongs_to_collection: null,
        budget: 25000000,
        genres: [],
        homepage: "",
        id: 278,
        imdb_id: "tt0111161",
        original_language: "en",
        original_title: "title",
        overview: "",
        popularity: 39.317,
        poster_path: "/poster_path.jpg",
        production_companies: [],
        release_date: "1994-09-23",
        revenue: 28341469,
        runtime: 142,
        spoken_languages: [],
        status: "Released",
        tagline: "tagline.",
        title: "title",
        video: false,
        vote_average: 8.7,
        vote_count: 14945,
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(requestResponse));

    // Act
    fetchDetails().then((response) => {
      // Assert
      expect(response).toEqual(requestResponse.data);
      done();
    });
  });

  it("should return an error message when the request is not successful", (done) => {
    axios.get.mockImplementation(() => Promise.reject(new Error()));

    // Act
    fetchDetails().catch((error) => {
      // Assert
      expect(
        error.message.startsWith("Could not fetch the movie details movies:")
      ).toBeTruthy();
      done();
    });
  });
});
