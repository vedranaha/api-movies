import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

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
    <div className="movies">
      Movie type: {movieType}
      {movies?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};
export default Movies;
