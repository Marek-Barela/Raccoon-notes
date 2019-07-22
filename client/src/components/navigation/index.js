import React from "react";
import style from "./index.module.css";
import LogoImg from "../../img/Raccoon-logo.png";
import NavigationDropdown from "../navigation-dropdown";
import { connect } from "react-redux";
import { switchSidebarView } from "../../actions/sidebar";

const Navigation = ({ switchSidebarView }) => {
  const {
    navigation,
    sidebarButtonContainer,
    switchSidebarButton,
    navigationContainer,
    logo
  } = style;
  return (
    <nav className={navigation}>
      <div className={sidebarButtonContainer}>
        <button
          className={switchSidebarButton}
          onClick={() => switchSidebarView()}
        >
          &#9776;
        </button>
      </div>
      <div className={navigationContainer}>
        <img src={LogoImg} className={logo} alt="Logo" />
        <NavigationDropdown />
      </div>
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
