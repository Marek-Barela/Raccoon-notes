import React from "react";
import styles from "./index.module.css";

const index = ({ children }) => {
  const { hero } = styles;
  return <header className={hero}>{children}</header>;
};

export default index;
