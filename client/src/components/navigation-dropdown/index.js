import React from "react";
import style from "./index.module.css";

const Dropdown = () => {
  const { dropdown, dropdownElem, list, listElem, listMail } = style;
  return (
    <ul className={dropdown}>
      <li className={dropdownElem}>
        Marek &#9660;
        <ul className={list}>
          <li className={listMail}>ted@gmail.com</li>
          <li className={listElem}>Logout</li>
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;
