import React from "react";
import removeHTMLTags from "../../utils/removeHTMLTags";
import { connect } from "react-redux";
import { setNoteInEditor } from "../../actions/editor";
import styles from "./index.module.css";

const NoteElement = ({ data, setNoteInEditor, activeNote }) => {
  const { listElement, activeElement } = styles;
  let { title, text } = data;

  if (title.length > 20) {
    title = title.substring(0, 20) + "...";
  }

  if (text.length > 100) {
    text = text.substring(0, 100) + "...";
  }

  const selectNote = data => {
    //Prevent if note is already selected
    if (activeNote !== data._id) {
      setNoteInEditor(data);
    }
  };

  const elementStyling =
    activeNote !== data._id ? listElement : `${listElement} + ${activeElement}`;

  return (
    <li className={elementStyling} onClick={() => selectNote(data)}>
      <p>{title}</p>
      <span>{removeHTMLTags(text)}</span>
    </li>
  );
};

const mapStateToProps = state => ({
  activeNote: state.editor.activeNote
});

const mapDispatchToProps = {
  setNoteInEditor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteElement);
