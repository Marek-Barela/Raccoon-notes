import React from "react";
import { connect } from "react-redux";
import style from "./index.module.css";
import { logout } from "../../actions/auth";

const Dropdown = ({ user, logout }) => {
  const { dropdown, dropdownElem, list, listElem, listMail } = style;
  const MAX_USERNAME_LENGTH = 15;
  const MAX_USER_EMAIL_LENGTH = 20;
  let email = "";
  let name = "";

  if (user !== null) {
    email = user.email;
    name = `${user.name} \u25BC`;
  }

  if (user.name === undefined || user.email === undefined) {
    name = ""
    email = ""
  }

  if (name.length > MAX_USERNAME_LENGTH) {
    name = name.substring(0, MAX_USERNAME_LENGTH) + "...";
  }

  if (email.length > MAX_USER_EMAIL_LENGTH) {
    email = email.substring(0, MAX_USER_EMAIL_LENGTH) + "...";
  }

  return (
    <ul className={dropdown}>
      <li className={dropdownElem}>
        {name}
        <ul className={list}>
          <li className={listMail}>{email}</li>
          <li className={listElem} onClick={logout}>Logout</li>
        </ul>
      </li>
    </ul>
  );
};

const mapDispatchToProps = {
  logout
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
