import React from "react";
import NoteList from "../note-list";
import NoteEditor from "../note-editor";
import styles from "./index.module.css";

const index = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <NoteList />
      <NoteEditor />
    </div>
  );
};

export default index;
