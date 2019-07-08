import React from "react";
import Hero from "../hero";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const index = () => {
  const {
    wrapper,
    formContainer,
    formDecorator,
    form,
    input,
    button,
    paragraph
  } = styles;
  return (
    <Hero>
      <div className={wrapper}>
        <div className={formContainer}>
          <div className={formDecorator}>Sign Up</div>
          <form className={form}>
            <input className={input} placeholder="Username" />
            <input className={input} placeholder="e-mail" />
            <input className={input} placeholder="Password" />
            <input className={input} placeholder="Confirm Password" />
            <button type="submit" className={button}>
              Sign Up
            </button>
          </form>
          <p className={paragraph}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </Hero>
  );
};

export default index;
