import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails, fetchCredits } from "../../api";
import { Loading } from "../components";

const Details = lazy(() => import("../components/details"));

export const MovieDetails = () => {
  let { movieId } = useParams();
  // States
  const [movieDetails, setMovieDetails] = useState([]);
  const [credits, setCredits] = useState([]);

  // Effects
  useEffect(() => {
    fetchDetails(movieId).then((result) => setMovieDetails(result));
    fetchCredits(movieId).then((result) => setCredits(result));
  }, [movieId]);

  return (
    <Suspense fallback={<Loading />}>
      <Details movieDetails={movieDetails} credits={credits} />
    </Suspense>
  );
};
