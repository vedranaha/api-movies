import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie" onclick="getMovieDetail(${movie.id})">
      <div className="title">
        <h2>{movie.title}</h2>
      </div>
      <div className="imgMovie">
        <img
          src={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
          alt="movie image"
        />
      </div>
    </div>
  );
};
export default Movie;
