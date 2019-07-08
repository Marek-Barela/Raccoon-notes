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
          <div className={formDecorator}>Login</div>
          <form className={form}>
            <input className={input} placeholder="e-mail" />
            <input className={input} placeholder="Password" />
            <button type="submit" className={button}>
              Login
            </button>
          </form>
          <p className={paragraph}>
            Not registered? <Link to="/registration">Sign up</Link>
          </p>
        </div>
      </div>
    </Hero>
  );
};

export default index;
