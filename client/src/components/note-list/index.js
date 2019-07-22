import React from "react";
import NoteElement from "../note-list-element";
import { Scrollbars } from "react-custom-scrollbars";
import { createNewNote } from "../../actions/notes";
import styles from "./index.module.css";
import { connect } from "react-redux";

const NoteList = ({ notes, createNewNote, isSidebarActive }) => {
  const {
    aside,
    asideHidden,
    list,
    createNoteBtn,
    createNoteContainer,
    verticalScroll
  } = styles;

  const sidebarStyling = isSidebarActive ? aside : `${aside} + ${asideHidden}`;

  return (
    <aside className={sidebarStyling}>
      <div className={createNoteContainer}>
        <p>My notes</p>
        <button
          className={createNoteBtn}
          title="Create note"
          onClick={() => createNewNote()}
        >
          +
        </button>
      </div>
      <Scrollbars
        thumbSize={60}
        className={list}
        renderThumbVertical={props => (
          <div {...props} className={verticalScroll} />
        )}
      >
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
  notes: state.notes.notes,
  isSidebarActive: state.sidebar.isSidebarActive
});

const mapDispatchToProps = {
  createNewNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
