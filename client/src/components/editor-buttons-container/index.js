import React from "react";
import styles from "./index.module.css";

const EditorButtonsContainer = () => {
  const { wrapper, accept, deceline } = styles;
  return (
    <div className={wrapper}>
      <button className={accept}>Save</button>
      <button className={deceline}>Cancel</button>
    </div>
  );
};

export default EditorButtonsContainer;
