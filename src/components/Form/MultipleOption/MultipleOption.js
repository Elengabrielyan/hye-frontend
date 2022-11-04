import React, { useState } from "react";

import FormButton from "../FormButton/FormButton";
import Genders from "../Gender/Genders";
import StepInfo from "../StepInfo";

import styles from "./multipleOption.module.css";

export default function MultipleOption({
  title,
  description,
  items,
  btnType,
  handleChoosing,
  wrapperType,
  handleGender,
  render,
}) {
  const [genders, setGenders] = useState([
    {
      id: 0,
      content: "Male",
      active: false,
    },
    {
      id: 1,
      content: "Female",
      active: false,
    },
  ]);

  const handleGenderChoosing = (id) => {
    setGenders(
      genders.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };

  return (
    <div>
      <StepInfo title={title} description={description} />

      <div className={styles[wrapperType]}>
        {items.map(({ id, content, active }) => (
          <div className={styles.wrapper}>
            <FormButton
              key={id}
              id={id}
              active={active}
              type={btnType}
              content={content}
              handleChoosing={handleChoosing}
            />

            {active && render && (
              <div>
                <Genders id={id} handleGender={handleGender} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
