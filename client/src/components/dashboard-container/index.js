import React from "react";
import NoteList from "../note-list";
import NoteEditor from "../note-editor";
import styles from "./index.module.css";

const index = ({ isSidebarActive }) => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <NoteList isSidebarActive={isSidebarActive} />
      <NoteEditor isSidebarActive={isSidebarActive} />
    </div>
  );
};

export default index;
