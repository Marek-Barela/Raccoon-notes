import React from "react";
import style from "./index.module.css";
import LogoImg from "../../img/Raccoon-logo.png";
import NavigationDropdown from "../navigation-dropdown";
import { connect } from "react-redux";
import { switchSidebarView } from "../../actions/sidebar";

const Navigation = ({ switchSidebarView }) => {
  const { navigation, switchListButton, logo } = style;
  return (
    <nav className={navigation}>
      <button className={switchListButton} onClick={() => switchSidebarView()}>
        x
      </button>
      <img src={LogoImg} className={logo} alt="Logo" />
      <NavigationDropdown />
    </nav>
  );
};

const mapDispatchToProps = {
  switchSidebarView
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
