import React from "react";

import styles from "./socialNetworks.module.css";

import facebook from "./pics/facebook.png";
import instagram from "./pics/instagram.png";

export default function SocialNetworks() {
  return (
    <div className={styles.socialNetworks}>
      <a
        href="https://www.facebook.com/hyeboxarmenia"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={facebook}
          className={styles.socialNetworkIcon}
          alt="facebook icon"
        />
      </a>
      <a
        href="https://www.instagram.com/hye_box/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={instagram}
          className={styles.socialNetworkIcon}
          alt="instagram icon"
        />
      </a>
    </div>
  );
}
