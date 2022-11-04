import React from "react";

import BoxButton from "../BoxButton/BoxButton";

import paths from "../../paths";

import styles from "./mainMessage.module.css";

const pics = [
  { id: 0, src: require("./pics/background.png").default, alt: "background" },
  { id: 1, src: require("./pics/girl.png").default, alt: "girl" },
  { id: 2, src: require("./pics/granny.png").default, alt: "granny" },
  {
    id: 3,
    src: require("./pics/pomegranate.png").default,
    alt: "pomegranate",
  },
  { id: 4, src: require("./pics/souvenirs.png").default, alt: "souvenirs" },
];

export default function MainMessage() {
  return (
    <div className={styles.mainMessage}>
      <div>
        <h1>
          Open Your Portal <br /> to Armenia!
        </h1>
        <p>
          Armenia has never been this exciting. <br /> Connect with your
          Motherland and make an impact!
        </p>
        <BoxButton path={paths.pricing} />
      </div>

      <div className={styles.pics}>
        {pics.map(({ id, src, alt }) => (
          <img
            key={id}
            src={src}
            className={`${styles[alt]} ${styles.pic}`}
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
}
