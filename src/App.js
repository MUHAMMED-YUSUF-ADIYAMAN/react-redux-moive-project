import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Actors from "./pages/Actors";
import Actor from "./pages/Actor";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Actors" component={Actors} />
        <Route path="/Actor/:id" component={Actor} />
        <Route path="/Movies" component={Movies} />
        <Route path="/Movie/:id" component={Movie} />
        <Route path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
