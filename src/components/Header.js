import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="menu">
        <NavLink to="/">
          <span className="home">Home</span>
        </NavLink>
        <NavLink to="/popular">
          <span className="popular">Popular movies</span>
        </NavLink>

        <NavLink to="/upcoming">
          <span className="upcoming">Upcoming</span>
        </NavLink>

        <NavLink to="/top_rated">
          <span className="top_rated">Top rated</span>
        </NavLink>

        <NavLink to="/search/movie">
          <span className="search">Search</span>
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
