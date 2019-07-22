import React, { useEffect, useState } from "react";
import Navigation from "../navigation";
import DashboardContainer from "../dashboard-container";
import { getUserNotes } from "../../actions/notes";
import { connect } from "react-redux";

const Dashboard = ({ userID, getUserNotes }) => {
  const [dataSidebar, setDataSidebar] = useState({
    isSidebarActive: true
  });

  const { isSidebarActive } = dataSidebar;

  useEffect(() => {
    if (userID !== null) {
      getUserNotes(userID);
    }
  }, [getUserNotes, userID]);

  const switchSidebarVisiblity = () => {
    setDataSidebar({ isSidebarActive: !isSidebarActive });
  };

  return (
    <>
      <Navigation switchSidebarVisiblity={switchSidebarVisiblity} />
      <DashboardContainer isSidebarActive={isSidebarActive} />
    </>
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
