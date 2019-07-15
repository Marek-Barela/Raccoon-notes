import React from "react";
import styles from "./index.module.css";

const EditorButtonsContainer = () => {
  const { wrapper, accept, danger } = styles;
  return (
    <div className={wrapper}>
      <button className={danger}>x</button>
      <div>
        <button className={accept}>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default EditorButtonsContainer;
