import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { connect } from "react-redux";
import styles from "./index.module.css";
import "react-quill/dist/quill.snow.css";

const NoteEditor = ({ data }) => {
  const { editor } = styles;
  const { editorIsOpen } = data;

  const [editorData, setEditorData] = useState({
    title: "",
    text: ""
  });

  useEffect(() => {
    setEditorData({ ...editorData, text: data.text, title: data.title });
  }, [data.text, data.title]);

  const onEditorChange = value => {
    setEditorData({ ...editorData, text: value });
  };

  const { text } = editorData;

  return (
    editorIsOpen && (
      <ReactQuill
        value={text}
        className={editor}
        onChange={val => onEditorChange(val)}
      />
    )
  );
};

const mapStateToProps = state => ({
  data: state.editor
});

export default connect(
  mapStateToProps,
  null
)(NoteEditor);
