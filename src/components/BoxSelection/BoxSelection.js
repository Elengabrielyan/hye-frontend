import React from "react";

import Box from "./Box/Box";
import ProgressBar from "../ProgressBar/ProgressBar";

import boxBox from "./pics/boxBox.png";
import famBox from "./pics/famBox.png";

import styles from "./boxSelection.module.css";
import textStyles from "../../styles/texts.module.css";

const regBoxContent = [
  { id: 0, content: "Customized" },
  { id: 1, content: "Thematic" },
  { id: 2, content: "From 4 to 6 products" },
  { id: 3, content: "Postcards with stories" },
  { id: 4, content: "Support up to 9 producers each month" },
];

const famBoxContent = [
  { id: 0, content: "Customized" },
  { id: 1, content: "Thematic" },
  { id: 2, content: "From 7 to 9 products" },
  { id: 3, content: "Postcards with stories" },
  { id: 4, content: "Support up to 13 producers each month" },
  { id: 5, content: "StickerPack" },
];

export default function BoxSelection({ isPricingPage, handleBox }) {
  return (
    <>
      {isPricingPage && <ProgressBar fill="25%" />}
      <div className={styles.wrapper}>
        <h3 className={textStyles.boxSelectionTitle}>
          Experience It For Yourself
        </h3>
        <p className={textStyles.boxSelectionDescription}>
          Here are the 2 options we have for you! Choose the small box or the
          large one and become a part of the development of the Armenian
          economy!
        </p>
        <div className={styles.boxes}>
          <Box
            pic={boxBox}
            title="Regular Box"
            description={regBoxContent}
            price="58.99$"
            handleBox={handleBox}
          />
          <Box
            pic={famBox}
            title="Family Box"
            description={famBoxContent}
            price="98.99$"
            handleBox={handleBox}
          />
        </div>
      </div>
    </>
  );
}
