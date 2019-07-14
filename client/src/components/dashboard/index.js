import React, { Fragment, useEffect } from "react";
import Navigation from "../navigation";
import DashboardContainer from "../dashboard-container";
import { getUserNotes } from "../../actions/notes";
import { connect } from "react-redux";

const Dashboard = ({ userID, getUserNotes }) => {
  useEffect(() => {
    if (userID !== null) {
      getUserNotes(userID);
    }
  }, [getUserNotes, userID]);

  return (
    <Fragment>
      <Navigation />
      <DashboardContainer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userID: state.auth.user._id
});

const mapDispatchToProps = {
  getUserNotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
