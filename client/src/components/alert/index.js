import React from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => {
    const { listElement } = styles;
    return (
      <li key={alert.id} className={listElement}>
        {alert.msg}
      </li>
    );
  });

const List = ({ alerts }) => {
  const { list } = styles;
  return (
    <ul className={list}>
      <Alert alerts={alerts} />
    </ul>
  );
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  null
)(List);
