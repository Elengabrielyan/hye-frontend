import React from "react";

import styles from "./client.module.css";

export default function Client({ pic, name, company, review }) {
  return (
    <div className={styles.client}>
      <img src={pic} alt="Reviewer pic" />
      <h5>{name}</h5>
      <h6>{company}</h6>
      <p>{review}</p>
    </div>
  );
}
