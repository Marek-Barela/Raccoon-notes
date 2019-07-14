import React, { useState } from "react";
import ReactQuill from "react-quill";
import styles from "./index.module.css";
import "react-quill/dist/quill.snow.css";

const NoteEditor = () => {
  const { editor } = styles;

  const [editorData, setEditorData] = useState({
    text: ""
  });

  const onEditorChange = value => {
    setEditorData({ ...editorData, text: value });
  };

  const { text } = editorData;

  return (
    <ReactQuill
      value={text}
      className={editor}
      onChange={val => onEditorChange(val)}
    />
  );
};

export default NoteEditor;
