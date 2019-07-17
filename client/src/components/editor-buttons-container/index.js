import React from "react";
import { updateUserNotes } from "../../actions/notes";
import styles from "./index.module.css";
import { connect } from "react-redux";

const EditorButtonsContainer = ({
  editedTitle,
  editedText,
  editedNote,
  updateUserNotes
}) => {
  const { wrapper, accept, danger } = styles;
  return (
    <div className={wrapper}>
      <span>x</span>
      <div>
        <button
          className={accept}
          onClick={() => updateUserNotes(editedNote, editedTitle, editedText)}
        >
          Save
        </button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  updateUserNotes
};

export default connect(
  null,
  mapDispatchToProps
)(EditorButtonsContainer);
