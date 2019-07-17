import React from "react";
import NoteElement from "../note-list-element";
import { Scrollbars } from "react-custom-scrollbars";
import { createNewNote } from "../../actions/notes";
import styles from "./index.module.css";
import { connect } from "react-redux";

const NoteList = ({ notes, createNewNote }) => {
  const { list, addNoteButton, createNoteContainer } = styles;
  return (
    <aside>
      <div className={createNoteContainer}>
        <button className={addNoteButton} onClick={() => createNewNote()}>
          Create note
        </button>
      </div>
      <Scrollbars thumbSize={200} className={list}>
        <ul>
          {notes.map(note => {
            return <NoteElement key={note._id} data={note} />;
          })}
        </ul>
      </Scrollbars>
    </aside>
  );
};

const mapStateToProps = state => ({
  notes: state.notes.notes
});

const mapDispatchToProps = {
  createNewNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
