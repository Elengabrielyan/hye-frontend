import React, { useState } from "react";
import SingleOption from "../SignleOption/SingleOption";

export default function Genders({ id, handleGender }) {
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
    <SingleOption
      idx={id}
      items={genders}
      btnType="small"
      handleGender={handleGender}
      handleChoosing={handleGenderChoosing}
    />
  );
}
