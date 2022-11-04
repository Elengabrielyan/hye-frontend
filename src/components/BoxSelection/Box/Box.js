import React from "react";

import BoxButton from "../../BoxButton/BoxButton";

import styles from "./box.module.css";
import textStyles from "../../../styles/texts.module.css";
import paths from "../../../paths";

export default function Box({ pic, title, description, price, handleBox }) {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <img src={pic} className={styles.pic} alt="Box pic" />
        <h5 className={textStyles.boxTitle}>{title}</h5>
        <div>
          {description.map(({ id, content }) => (
            <p key={id} className={textStyles.boxDescription}>
              {content}
            </p>
          ))}
        </div>
      </div>
      <p className={textStyles.boxPrice}>{price}</p>
      <BoxButton
        path={paths.subscription}
        handleBox={handleBox}
        title={title}
        price={price}
      />
    </div>
  );
}
