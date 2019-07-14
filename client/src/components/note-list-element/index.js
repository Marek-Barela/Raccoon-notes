import React from "react";

const NoteElement = ({ data }) => {
  let { title } = data;
  if (title.length > 20) {
    title = title.substring(0, 20) + "...";
  }

  return <li>{title}</li>;
};

export default NoteElement;
