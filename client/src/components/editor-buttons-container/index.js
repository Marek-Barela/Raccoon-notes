import React from "react";
import { updateUserNotes } from "../../actions/notes";
import { cancelEditorChanges } from "../../actions/editor";
import styles from "./index.module.css";
import { connect } from "react-redux";

const EditorButtonsContainer = ({
  editedTitle,
  editedText,
  editedNote,
  updateUserNotes,
  cancelEditorChanges,
  dataAreDifferent
}) => {
  const { wrapper, accept, cancel } = styles;
  return (
    <div className={wrapper}>
      <span>x</span>
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
  cancelEditorChanges
};

export default connect(
  null,
  mapDispatchToProps
)(EditorButtonsContainer);
