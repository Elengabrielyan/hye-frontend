import React from "react";

import styles from "./sellingPoints.module.css";

import pig from "./pics/sellingPig.png";
import doc from "./pics/sellingDoc.png";
import calendar from "./pics/sellingCalendar.png";

export default function SellingPoints() {
  return (
    <div className={styles.sellingPoints}>
      <div className={styles.sellingPoint}>
        <img src={pig} alt="pig pic" />
        <h3>Impactful Purchase</h3>
        <p>
          Together we make a change! <br />
          While you connect with your motherland, <br />
          our partners get opportunities to produce <br />
          and grow in their homeland.
        </p>
      </div>

      <div className={styles.sellingPoint}>
        <img src={doc} alt="selling point pic" />
        <h3>Customized</h3>
        <p>
          Your Preferences matter! <br />
          We learn your preferences and ship you <br />
          products you will surely enjoy.
        </p>
      </div>

      <div className={styles.sellingPoint}>
        <img src={calendar} alt="selling calendar" />
        <h3>Monthly themes</h3>
        <p>
          Get new experiences every time! <br />
          New Month-new Theme. All connected to <br />
          Armenia and Armenian culture.
        </p>
      </div>
    </div>
  );
}
