import React from "react";
import style from "./index.module.css";
import LogoImg from "../../img/Raccoon-logo.png";

const Navigation = () => {
  const { navigation, logo } = style;
  return (
    <nav className={navigation}>
      <img src={LogoImg} className={logo} alt="Logo" />
    </nav>
  );
};

export default Navigation;
