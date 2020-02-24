import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Homepage, MovieDetails } from "./pages";
import { Navbar } from "./pages/components";
import "./app.scss";

const history = createBrowserHistory();

function App() {
  return (
    <div className="container">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/homepage" component={Homepage}></Route>
          <Route path="/movieDetails/:movieId" component={MovieDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
