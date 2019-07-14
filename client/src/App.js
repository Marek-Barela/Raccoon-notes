import React, { Fragment, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./template/LandingPage";
import LoginPage from "./template/LoginPage";
import RegistrationPage from "./template/RegistrationPage";
import DashboardPage from "./template/DashboardPage";
import PrivateRoute from "./components/protected-route";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
