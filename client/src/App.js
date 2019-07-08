import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./template/LandingPage";
import LoginPage from "./template/LoginPage";
import RegistrationPage from "./template/RegistrationPage";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registration" component={RegistrationPage} />
    </Fragment>
  );
};

export default App;
