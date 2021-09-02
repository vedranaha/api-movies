import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import "../Movies/Movies.css";

const Movies = (props) => {
  const movieType = props.match.params.movieType;

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieType}?api_key=b82cafabe4d020ce74e2941e73e6b26a`
      )
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [movieType]);

  return (
    <div class="container">
      <div className="movieContainer">
        <h4 className="titleMovieType">Movie Type: First 10 {movieType}</h4>
        <div className="movies">
          {movies?.map(
            (movie, index) =>
              index < 10 && <Movie movie={movie} key={movie.id} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Movies;
