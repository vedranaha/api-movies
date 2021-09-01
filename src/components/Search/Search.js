import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    if (query !== "") {
      setSearch(query);
      setQuery("");
    }
    e.preventDefault();
  };

  useEffect(() => {
    const response = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=${search}`
        )
        .then((res) => setMovies(res.data.results))
        .catch((error) => console.error(error));
    };
    response();
  }, [search]);

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="search"
          autoFocus
          placeholder="find movie"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>

      {search ? (
        <p className="searchResults">Search results: {search}</p>
      ) : null}

      <div className="result">
        {movies?.map(
          (movie, index) => index < 10 && <Movie movie={movie} key={movie.id} />
        )}
      </div>
    </div>
  );
};

export default Search;
