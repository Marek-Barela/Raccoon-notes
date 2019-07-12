import React, { useState } from "react";
import Hero from "../hero";
import Alert from "../alert";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { setAlert } from "../../actions/alert";

const Register = ({ setAlert }) => {
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
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords are not the same");
    }
  };

  return (
    <Hero>
      <div className={wrapper}>
        <div className={formContainer}>
          <Alert />
          <div className={formDecorator}>Sign Up</div>
          <form className={form} onSubmit={e => onSubmit(e)}>
            <input
              name="name"
              className={input}
              type="text"
              autoComplete="username"
              placeholder="Username"
              value={name}
              onChange={e => onChange(e)}
            />
            <input
              name="email"
              className={input}
              type="email"
              autoComplete="email"
              placeholder="e-mail"
              value={email}
              onChange={e => onChange(e)}
            />
            <input
              name="password"
              className={input}
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              value={password}
              onChange={e => onChange(e)}
            />
            <input
              name="password2"
              className={input}
              type="password"
              autoComplete="new-password"
              placeholder="Confirm Password"
              value={password2}
              onChange={e => onChange(e)}
            />
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

const mapDispatchToProps = {
  setAlert
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
