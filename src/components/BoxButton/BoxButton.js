import React from "react";
import { Link } from "react-router-dom";

import styles from "./boxButton.module.css";

import buttonArrow from "./pics/boxButtonArrow.png";

export default function BoxButton({ path, closeNav, handleBox, title, price }) {
  return (
    <button
      className={styles.boxButton}
      onClick={() => {
        if (!!closeNav) {
          closeNav();
        }

        if (!!handleBox) {
          handleBox({ title, price });
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Link to={path}>
        <span>GET THE BOX</span>
        <img src={buttonArrow} alt="box button arrow" />
      </Link>
    </button>
  );
}
