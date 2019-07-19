import React from "react";
import { updateUserNotes, deleteCurrentNote } from "../../actions/notes";
import { cancelEditorChanges } from "../../actions/editor";
import styles from "./index.module.css";
import trash from "../../img/delete-button.svg";
import { connect } from "react-redux";

const EditorButtonsContainer = ({
  editedTitle,
  editedText,
  editedNote,
  updateUserNotes,
  cancelEditorChanges,
  dataAreDifferent = false,
  deleteCurrentNote
}) => {
  const { wrapper, accept, cancel, trashIcon } = styles;

  const deleteNote = note => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteCurrentNote(note);
    }
  };

  return (
    <div className={wrapper}>
      <img
        src={trash}
        className={trashIcon}
        alt="Delete"
        onClick={() => deleteNote(editedNote)}
      />
      <div>
        {dataAreDifferent() ? (
          <>
            <button
              className={accept}
              onClick={() =>
                updateUserNotes(editedNote, editedTitle, editedText)
              }
            >
              Save
            </button>
            <button className={cancel} onClick={() => cancelEditorChanges()}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button disabled>Save</button>
            <button disabled>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  updateUserNotes,
  cancelEditorChanges,
  deleteCurrentNote
};

export default connect(
  null,
  mapDispatchToProps
)(EditorButtonsContainer);
