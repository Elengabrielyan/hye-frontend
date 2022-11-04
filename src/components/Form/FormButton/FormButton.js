import React from "react";

import styles from "./formButton.module.css";

const classNames = require("classnames");

export default function FormButton({
  id,
  idx,
  type,
  active,
  content,
  handleChoosing,
  handleGender,
}) {
  const btnClass = classNames({
    [styles.btn]: true,
    [styles.small]: type === "small",
    [styles.large]: type === "large",
    [styles.auto]: type === "auto",
    [styles.active]: active,
  });

  return (
    <button
      className={btnClass}
      onClick={() => {
        handleChoosing && handleChoosing(id);
        handleGender && handleGender(idx, content);
      }}
    >
      {content}
    </button>
  );
}
