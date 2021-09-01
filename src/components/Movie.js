import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div className="title">
        <h3>{movie.title}</h3>
      </div>
      <div className="imgMovie">
        <img
          src={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
          alt="movie img"
        />
        <div className="average">
          <p>{movie.vote_average}/10</p>
        </div>
      </div>
      <div className="moreDetails">
        <h4 className="originalTitle">{movie.original_title}</h4>
        <span>({movie.release_date})</span>
        <h5> Sinopsis:</h5> <p>{movie.overview}</p>
      </div>
    </div>
  );
};
export default Movie;
