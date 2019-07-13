import React from "react";
import Hero from "../hero";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./index.module.css";

const Landing = ({ isAuthenticated }) => {
  const { contentWrapper, header, paragraph, buttonWrapper } = styles;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Landing);
