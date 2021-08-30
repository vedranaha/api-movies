import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
