import React, { useState } from "react";
import Hero from "../hero";
import Alert from "../alert";
import styles from "./index.module.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const {
    wrapper,
    formContainer,
    formDecorator,
    form,
    input,
    button,
    paragraph
  } = styles;

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Hero>
      <div className={wrapper}>
        <div className={formContainer}>
          <Alert />
          <div className={formDecorator}>Login</div>
          <form className={form} onSubmit={e => onSubmit(e)} noValidate>
            <input
              name="email"
              type="email"
              className={input}
              placeholder="e-mail"
              autoComplete="email"
              value={email}
              onChange={e => onChange(e)}
            />
            <input
              name="password"
              type="password"
              className={input}
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={e => onChange(e)}
            />
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

const mapDispatchToProps = {
  login
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
