import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Search from "./components/Search/Search";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact />
          <Route path="/search/movie" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
