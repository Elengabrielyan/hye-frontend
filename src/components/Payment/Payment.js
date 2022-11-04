import React, { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import PaymentInput from "./PaymentInput";

import Summary from "./Summary/Summary";

import styles from "./payment.module.css";

const shippingInputs = [
  {
    id: 0,
    type: "text",
    fieldName: "firstName",
    title: "First Name",
  },
  {
    id: 1,
    type: "text",
    fieldName: "lastName",
    title: "Last Name",
  },
  {
    id: 2,
    type: "text",
    fieldName: "address",
    title: "Address",
  },
  {
    id: 3,
    type: "text",
    fieldName: "city",
    title: "City",
  },
  {
    id: 4,
    type: "text",
    fieldName: "state",
    title: "State",
  },
  {
    id: 5,
    type: "text",
    fieldName: "zipCode",
    title: "Zip code",
  },
];

const paymentInputs = [
  {
    id: 0,
    type: "text",
    fieldName: "cardNumber",
    title: "Card Number",
  },
  {
    id: 1,
    type: "text",
    fieldName: "nameOnCard",
    title: "Name On Card",
  },
  {
    id: 2,
    type: "text",
    fieldName: "cvv",
    title: "CVV",
  },
  {
    id: 3,
    type: "date",
    fieldName: "expiration",
    title: "Expiration",
  },
];

export default function Payment() {
  const [info, setInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    nameOnCard: "",
    cvv: "",
    expiration: "",
  });

  const validation = () => {
    if (
      info.email.length > 0 &&
      info.firstName.length > 0 &&
      info.lastName.length > 0 &&
      info.address.length > 0 &&
      info.city.length > 0 &&
      info.state.length > 0 &&
      info.zipCode.length > 0 &&
      info.cardNumber.length > 0 &&
      info.nameOnCard.length > 0 &&
      info.cvv.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  function handleInfo(value, infoType) {
    setInfo({ ...info, [infoType]: value });
  }

  return (
    <>
      <ProgressBar fill="98%" />

      <div className={styles.payment}>
        <h3>Order</h3>

        <div className={styles.wrapper}>
          <div>
            <h4>Shipping</h4>

            <form>
              <label>Email</label>
              <PaymentInput
                type="email"
                infoType="email"
                handleInfo={handleInfo}
              />

              {shippingInputs.map(({ id, type, title, fieldName }) => {
                return (
                  <div key={id}>
                    <label>{title}</label>

                    <PaymentInput
                      type={type}
                      infoType={fieldName}
                      handleInfo={handleInfo}
                      value={info[fieldName]}
                    />
                  </div>
                );
              })}
            </form>

            <h4>Payment</h4>
            <form>
              {paymentInputs.map(({ id, type, fieldName, title }) => {
                return (
                  <div key={id}>
                    <label>{title}</label>

                    <PaymentInput
                      type={type}
                      infoType={fieldName}
                      handleInfo={handleInfo}
                      value={info[fieldName]}
                    />
                  </div>
                );
              })}
            </form>
          </div>

          <Summary
            info={info}
            handleInfo={handleInfo}
            email={info.email}
            name={info.firstName}
            validation={validation}
            customerInfo={info}
          />
        </div>
      </div>
    </>
  );
}
