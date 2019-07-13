import React, { Fragment } from "react";
import Navigation from "../navigation";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <Navigation />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
