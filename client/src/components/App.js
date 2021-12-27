import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

const App = (props) => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <h2>Hello from react</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
