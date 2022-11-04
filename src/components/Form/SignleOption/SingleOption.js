import React from "react";

import FormButton from "../FormButton/FormButton";
import StepInfo from "../StepInfo";

import styles from "./singleOption.module.css";

export default function SingleOption({
  idx,
  title,
  description,
  btnType,
  items,
  handleChoosing,
  handleGender,
}) {
  return (
    <div style={!handleGender ? { width: "731px" } : {}}>
      <StepInfo title={title} description={description} />
      <div className={!handleGender && styles.options}>
        {items.map(({ id, content, active }) => (
          <FormButton
            key={id}
            id={id}
            idx={idx}
            active={active}
            type={btnType}
            content={content}
            handleChoosing={handleChoosing}
            handleGender={handleGender}
          />
        ))}
      </div>
    </div>
  );
}
