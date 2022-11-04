import React from "react";

import styles from "./video.module.css";

export default function Video({ page }) {
  return (
    <div className={styles.videoContainer}>
      <h3>A subscription that matters</h3>
      <p>
        HYE Box establishes a bridge between Armenian artists, artisans,
        entrepreneurs <br /> and everyone interested in discovering Armenian
        products.
        <br />
        Supporting the Armenian economy has never been this fun.
      </p>
      {/* <video src="" controls></video> */}
      {page === "Home" ? (
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/347tWznXD9E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/D5Upcc24LXM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}
