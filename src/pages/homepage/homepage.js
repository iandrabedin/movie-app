import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchTopRated, imageURL, posterSize } from "../../api";
import { Loading, FormFilter, sorting } from "../components";
import "./homepage.scss";

const Card = lazy(() => import("../components"));

export const Homepage = (props) => {
  const { history } = props;

  // States
  const [moviesList, setMoviesList] = useState([]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("default");

  // Callbacks
  const handleSelectedMovie = (movieId) => {
    history.push(`/movieDetails/${movieId}`);
  };

  const handleSortingChange = (e) => {
    setSortTerm(e.target.value);
    setResults(moviesList.sort(sorting(e.target.value)));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Effects
  useEffect(() => {
    fetchTopRated().then((result) =>
      setMoviesList(
        result.results.map((movie) => ({
          ...movie,
          vote_average: movie.vote_average * 10,
          release_date: new Date(movie.release_date).getFullYear(),
          poster_path: (
            <img
              src={`${imageURL}${posterSize.small}${movie.poster_path}`}
              alt={movie.title}
            />
          ),
        }))
      )
    );
  }, []);

  useEffect(() => {
    const results = moviesList.filter((d) =>
      d.title.toLowerCase().includes(searchTerm.trim())
    );

    setResults(results);
  }, [moviesList, searchTerm]);

  return (
    <>
      <h1 className="main-title">What movie should I watch?</h1>
      <Suspense fallback={<Loading />}>
        <FormFilter
          sortTerm={sortTerm}
          searchTerm={searchTerm}
          handleSortingChange={handleSortingChange}
          handleSearchChange={handleSearchChange}
        />
        <div className="row">
          {results?.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              genres={movie.genres}
              rating={movie.vote_average}
              overview={movie.overview}
              handleSelectedMovie={handleSelectedMovie}
            />
          ))}
        </div>
      </Suspense>
    </>
  );
};
