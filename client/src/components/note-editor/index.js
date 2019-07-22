import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorButtonsContainer from "../editor-buttons-container";
import { connect } from "react-redux";
import styles from "./index.module.css";
import "react-quill/dist/quill.snow.css";
import "./editor-styles.css";

const NoteEditor = ({ data, isSidebarActive }) => {
  const { editor, wrapper, wrapperWidth, noteTitle } = styles;
  const { editorIsOpen } = data;
  const emptyEdiotrState = "<p><br></p>";
  
  const [editorTitle, setEditorTitle] = useState({
    title: ""
  });

  const [editorText, setEditorText] = useState({
    text: ""
  });

  //Use 2 times Effect due to editor quill issue
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
  let textValue = text;

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

  const isDifferenceBetweenNotes = () => {
    //Prevent from editor issue 
    if (textValue === emptyEdiotrState && data.text !== emptyEdiotrState) { textValue = "" };
    if (data.title !== title || data.text !== textValue ) return true;
    else return false;
  };

  const wrapperStyling = isSidebarActive ? wrapper : `${wrapper} ${wrapperWidth}`;

  return (
    editorIsOpen && (
      <div className={wrapperStyling}>
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
        <EditorButtonsContainer
          editedTitle={title}
          editedText={text}
          editedNote={data.id}
          dataAreDifferent={isDifferenceBetweenNotes}
        />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  data: state.editor,
  isSidebarActive: state.sidebar.isSidebarActive
});

export default connect(
  mapStateToProps,
  null
)(NoteEditor);
