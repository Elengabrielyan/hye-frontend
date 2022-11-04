import React from "react";

export default function PaymentInput({ type, infoType, handleInfo, value }) {
  return (
    <input
      // className={error ? styles.errorInput : undefined}
      type={type}
      value={
        infoType === "cardNumber"
          ? value
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim()
          : value
      }
      onChange={(e) => {
        if (infoType === "cardNumber") {
          handleInfo(e.target.value.replace(/ /g, ""), infoType);
        } else {
          handleInfo(e.target.value, infoType);
        }
      }}
    />
  );
}
