import React from "react";
import NoteList from "../note-list";
import styles from "./index.module.css";

const index = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <NoteList />
    </div>
  );
};

export default index;
