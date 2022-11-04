import React from "react";

import styles from "./progressBar.module.css";

export default function ProgressBar({ fill, color }) {
  const roundColor = fill === "99%" ? styles.finishColor : styles.activeRound;
  return (
    <>
      <div
        className={styles.progressBar}
        style={{
          background: `linear-gradient(to right, ${
            color || "#0E183E"
          } ${fill}, #F5F5F5 10%)`,
        }}
      ></div>

      <div className={styles.rounds}>
        <div
          className={`${styles.round} ${
            fill >= "25%" ? `${roundColor}` : null
          }`}
        ></div>

        <div
          className={`${styles.round}  ${
            fill >= "50%" ? `${roundColor}` : null
          }`}
        ></div>
        <div
          className={`${styles.round}  ${
            fill >= "75%" ? `${roundColor}` : null
          }`}
        ></div>
        <div
          className={`${styles.round} ${
            fill === "99%" ? `${roundColor}` : null
          }`}
        ></div>
      </div>

      <div className={styles.descriptions}>
        <span className={fill >= "25%" ? `${styles.activeSpan}` : ""}>
          Select Box
        </span>
        <span className={fill >= "50%" ? `${styles.activeSpan}` : ""}>
          Subscription
        </span>
        <span className={fill >= "75%" ? `${styles.activeSpan}` : ""}>
          Customization
        </span>
        <span className={fill === "99%" ? `${styles.activeSpan}` : ""}>
          Order Details
        </span>
      </div>
    </>
  );
}
