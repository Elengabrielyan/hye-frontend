import React from "react";

import styles from "./noteFromUs.module.css";

import owners from "./pics/owners.png";

export default function NoteFromUs() {
  return (
    <div className={styles.note}>
      <img src={owners} alt="girls pic" />
      <div>
        <h3>A Note from Us</h3>
        <p>
          Living and rising in a small but historically and culturally rich
          country with different global and local challenges, we faced and
          noticed many social problems that must be somehow solved. We realized
          the importance of social enterprises by participating in and
          organizing different social and socially conscious projects from our
          teenage years and being a part of some non-profit organizations.
          <br />
          <br />
          Combining all the experience we have, all the ideas, and the desire to
          share Armenian culture with the world to show that people create a
          value that might be shared with the world here in Armenia, we come up
          with the idea of HYE Box.
        </p>
      </div>
    </div>
  );
}
