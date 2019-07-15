import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorButtonsContainer from "../editor-buttons-container";
import { connect } from "react-redux";
import styles from "./index.module.css";
import "react-quill/dist/quill.snow.css";

const NoteEditor = ({ data }) => {
  const { editor, wrapper, noteTitle } = styles;
  const { editorIsOpen } = data;

  const [editorTitle, setEditorTitle] = useState({
    title: ""
  });

  const [editorText, setEditorText] = useState({
    text: ""
  });

  console.log(data);

  useEffect(() => {
    setEditorTitle({
      title: data.title
    });
  }, [data]);

  useEffect(() => {
    setEditorText({
      text: data.text
    });
  }, [data]);

  const { title } = editorTitle;
  const { text } = editorText;

  const onEditorChange = value => {
    setEditorText({
      text: value
    });
  };

  const onTitleChange = e => {
    setEditorTitle({
      title: e.target.value
    });
  };

  return (
    editorIsOpen && (
      <div className={wrapper}>
        <input
          className={noteTitle}
          spellCheck={false}
          value={title}
          onChange={e => onTitleChange(e)}
        />
        <ReactQuill
          value={text}
          className={editor}
          onChange={val => onEditorChange(val)}
        />
        <EditorButtonsContainer />
      </div>
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
