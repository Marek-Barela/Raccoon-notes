import React from "react";
import removeHTMLTags from "../../utils/removeHTMLTags";
import { connect } from "react-redux";
import { setNoteInEditor } from "../../actions/editor";
import styles from "./index.module.css";

const NoteElement = ({ data, setNoteInEditor, activeNote }) => {
  const { listElement, activeElement } = styles;
  let { title, text } = data;

  if (title.length > 22) {
    title = title.substring(0, 22) + "...";
  }

  if (text.length > 50) {
    text = text.substring(0, 50) + "...";
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
