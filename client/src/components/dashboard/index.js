import React, { Fragment, useEffect } from "react";
import Navigation from "../navigation";
import { getUserNotes } from "../../actions/notes";
import { connect } from "react-redux";

const Dashboard = ({ notes, userID, getUserNotes }) => {
  useEffect(() => {
    if (userID !== null) {
      getUserNotes(userID);
    }
  }, [getUserNotes, userID]);

  console.log(notes);

  return (
    <Fragment>
      <Navigation />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
  userID: state.auth.user._id
});

const mapDispatchToProps = {
  getUserNotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
