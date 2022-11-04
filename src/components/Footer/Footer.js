import React from "react";

import Navbar from "../Navbar/Navbar";
import SoscialNetworks from "../SocialNetworks/SocialNetworks";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <Navbar />
        <SoscialNetworks />
      </div>
      <h6 style={{ marginBottom: 0 }}>
        Created by{" "}
        <a href="https://oganisyan.com" target="_blank" rel="noreferrer">
          oganisyan.com
        </a>
      </h6>
      <h6 style={{ marginTop: 5 }}>© 2021 hye Box. All Rights Reserved.</h6>
    </footer>
  );
}
