import React, { useState } from "react";

import styles from "./question.module.css";

import open from "./pics/open.png";
import close from "./pics/close.png";

const classNames = require("classnames");

export default function Question({ title, question }) {
  const [isOpen, setIsOpen] = useState(false);

  const questionClass = classNames({
    [styles.question]: true,
    [styles.open]: isOpen,
    [styles.close]: !isOpen,
  });

  return (
    <div className={questionClass} onClick={(event) => setIsOpen(!isOpen)}>
      <div>
        <h5>{title}</h5>
        <p>{question}</p>
      </div>
      <button>
        {isOpen ? (
          <img src={close} alt="question close pic" />
        ) : (
          <img src={open} alt="question open pic" />
        )}
      </button>
    </div>
  );
}
