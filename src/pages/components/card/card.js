import React from "react";
import "./card.scss";

const Card = (props) => {
  const {
    handleSelectedMovie,
    poster,
    title,
    date,
    overview,
    rating,
    id,
  } = props;

  return (
    <div className="col-sm-12 col-lg-6">
      <div className="card" key={id}>
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <div
              className="image"
              onClick={() => handleSelectedMovie(id)}
              onKeyPress={() => handleSelectedMovie(id)}
              role="button"
              tabIndex={0}
            >
              {poster}
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-sm-2 col-lg-2">
                  <div className="rating">{rating}</div>
                </div>
                <div className="col-sm-10 col-lg-10">
                  <h3 className="title">{title}</h3>
                  <p className="subtitle">{date}</p>
                </div>
              </div>
              <div className="overview">
                <p>{overview}</p>
              </div>
              <button
                className="button button-text"
                onClick={() => handleSelectedMovie(id)}
              >
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
