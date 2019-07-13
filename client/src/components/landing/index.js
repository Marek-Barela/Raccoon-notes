import React from "react";
import Hero from "../hero";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const index = () => {
  const { contentWrapper, header, paragraph, buttonWrapper } = styles;
  return (
    <Hero>
      <div className={contentWrapper}>
        <h1 className={header}>Organize yourself in easy way</h1>
        <p className={paragraph}>Take your ideas anywhere with raccoon notes</p>
        <div className={buttonWrapper}>
          <Link to="/login">Login</Link>
          <Link to="/registration">Sign in</Link>
        </div>
      </div>
    </Hero>
  );
};

export default index;
