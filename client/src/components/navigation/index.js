import React from "react";
import style from "./index.module.css";
import LogoImg from "../../img/Raccoon-logo.png";
import NavigationDropdown from "../navigation-dropdown";

const Navigation = ({ switchSidebarVisiblity }) => {
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
          onClick={() => switchSidebarVisiblity()}
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

export default Navigation;
