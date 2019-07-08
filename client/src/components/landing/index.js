import React from "react";
import Hero from "../hero";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import LogoImg from "../../img/logo.png";

const index = () => {
  const { logo, contentWrapper, header, paragraph, buttonWrapper } = styles;
  return (
    <Hero>
      <div className={contentWrapper}>
        <img src={LogoImg} className={logo} alt="Logo" />
        <h1 className={header}>Organize yourself in easy way</h1>
        <p className={paragraph}>Make your notes anywhere with simple notes</p>
        <div className={buttonWrapper}>
          <Link to="/login">Login</Link>
          <Link to="/registration">Sign in</Link>
        </div>
      </div>
    </Hero>
  );
};

export default index;
