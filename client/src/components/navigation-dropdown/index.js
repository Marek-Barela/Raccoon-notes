import React from "react";
import { connect } from "react-redux";
import style from "./index.module.css";

const Dropdown = ({ user }) => {
  const { dropdown, dropdownElem, list, listElem, listMail } = style;
  let email = "";
  let name = "";

  if (user !== null) {
    email = user.email;
    name = `${user.name} \u25BC`;
  }

  return (
    <ul className={dropdown}>
      <li className={dropdownElem}>
        {name}
        <ul className={list}>
          <li className={listMail}>{email}</li>
          <li className={listElem}>Logout</li>
        </ul>
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(Dropdown);
