import React from "react";

import styles from "./formInput.module.css";

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export default function FormInput({ type, placeholder, handleInput }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleInput(type, capitalize(e.target.value));
          e.target.value = "";
        }
      }}
    />
  );
}
