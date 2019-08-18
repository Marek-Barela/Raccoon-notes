import React from "react";
import removeHTMLTags from "../../utils/removeHTMLTags";
import { connect } from "react-redux";
import { setNoteInEditor } from "../../actions/editor";
import styles from "./index.module.css";

const NoteElement = ({ data, setNoteInEditor, activeNote }) => {
  const { listElement, activeElement } = styles;
  const MAX_TITLE_LENGTH = 22;
  const MAX_NOTE_TEXT_LENGTH = 50;
  let { title, text } = data;

  if (title.length > MAX_TITLE_LENGTH) {
    title = title.substring(0, MAX_TITLE_LENGTH) + "...";
  }

  if (text.length > MAX_NOTE_TEXT_LENGTH) {
    text = text.substring(0, MAX_NOTE_TEXT_LENGTH) + "...";
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
