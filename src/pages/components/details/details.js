import React from "react";
import { imageURL, posterSize } from "../../../api";
import "./details.scss";

import { Profile } from "../../components";

const formatDate = release => {
  const date = new Date(release);
  return date.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    day: "numeric"
  });
};

const Details = props => {
  const {
    title,
    genres,
    poster_path,
    overview,
    release_date
  } = props.movieDetails;
  const { cast, crew } = props.credits;

  return (
    <div className="details-content">
      <div className="row">
        <div className="poster col-sm-12 col-lg-6">
          <img src={`${imageURL}${posterSize.big}${poster_path}`} alt={title} />
        </div>
        <div className="col-sm-12 col-lg-6">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{formatDate(release_date)}</p>
          <div className="row">
            {genres &&
              genres.map(genre => <div className="pills">{genre.name}</div>)}
          </div>
          <h3 className="section-title">Overview</h3>
          <p className="overview">{overview}</p>
          <h3 className="section-title">Cast and Crew</h3>
          <div className="row">
            {cast?.slice(0, 4).map(actor => (
              <Profile profile={actor} />
            ))}
          </div>
          <div className="row">
            {crew?.slice(0, 4).map(member => (
              <Profile profile={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
