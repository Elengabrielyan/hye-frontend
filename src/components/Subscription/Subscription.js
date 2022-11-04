import React, { useState } from "react";

import SubscriptionOption from "./SubscribtionOption.js/SubscriptionOption";
import ProgressBar from "../ProgressBar/ProgressBar";

import styles from "./subscription.module.css";

export default function Subscription() {
  const selectedBox = JSON.parse(localStorage.getItem("Selected Box"));

  const [activeBox, setActiveBox] = useState(selectedBox);

  const options = [
    {
      id: 0,
      period: "One time",
      price: activeBox.title === "Regular Box" ? "58.99$" : "98.99$",
      description: "You will be charged once",
    },
    {
      id: 1,
      period: "3 Months",
      price: activeBox.title === "Regular Box" ? "55.99$" : "95.99$",
      description: "You will be charged once",
    },
    {
      id: 2,
      period: "6 Months",
      price: activeBox.title === "Regular Box" ? "53.99$" : "93.99$",
      description: "You will be charged once",
    },
    {
      id: 3,
      period: "12 Months",
      price: activeBox.title === "Regular Box" ? "52.99$" : "89.99$",
      description: "You will be charged once",
    },
  ];

  const handleSubscription = (subscription) => {
    localStorage.setItem("Subscription", JSON.stringify(subscription));
  };

  return (
    <>
      <div className={styles.subscription}>
        <ProgressBar fill="50%" />
        <h3>Select subscription</h3>
        <p className={styles.description}>
          Choose a monthly, 3, 6 or 12 months option below.
        </p>

        <div className={styles.options}>
          {options.map(({ id, period, price, description }) => {
            return (
              <SubscriptionOption
                key={id}
                period={period}
                price={price}
                description={description}
                handleSubscription={handleSubscription}
              />
            );
          })}
        </div>
      </div>

      <p className={styles.some}>
        *If you are interested in buying more than one box at once or/and it is
        a corporate purchase, contact us via messenger or email
        <a href="mailto:support@hyebox.com">(support@hyebox.com).</a>
      </p>
    </>
  );
}
