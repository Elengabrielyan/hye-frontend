import React from "react";

import text from "../../styles/texts.module.css";

export default function StepInfo({ title, description }) {
  return (
    <div>
      <h3 className={text.stepTitle}>{title}</h3>
      <p className={text.stepDescription}>{description}</p>
    </div>
  );
}
