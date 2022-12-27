
import Dashboard from "./Dashboard";
import React from "react";
import Workout from "./Workout";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Application = function Application () {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Camp Gladiator Mars
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route path="/dashboard"><Dashboard /></Route>
              <Route path="/workouts/:id"><Workout /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Application;
