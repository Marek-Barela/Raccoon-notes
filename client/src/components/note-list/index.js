import React from "react";
import NoteElement from "../note-list-element";
import { Scrollbars } from "react-custom-scrollbars";
import styles from "./index.module.css";
import { connect } from "react-redux";

const NoteList = ({ notes }) => {
  const { list } = styles;
  return (
    <aside>
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

export default connect(
  mapStateToProps,
  null
)(NoteList);
