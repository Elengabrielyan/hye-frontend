import React from "react";
import { Link } from "react-router-dom";

import paths from "../../../paths";

import styles from "./subscribtionOption.module.css";

const classNames = require("classnames");

export default function SubscriptionOption({
  period,
  price,
  description,
  handleSubscription,
}) {
  const optionClass = classNames({
    [styles.option]: true,
    [styles.popularOption]: period === "6 Months",
  });

  return (
    <>
      <div className={optionClass}>
        {period === "6 Months" ? (
          <p className={styles.popular}>POPULAR</p>
        ) : null}
        <p className={styles.period}>{period}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.description}>{description}</p>
        <Link to={paths.form}>
          <button
            className={styles.btn}
            onClick={() => {
              handleSubscription({ period, price });
            }}
          >
            <div></div>
            <span>Select</span>
          </button>
        </Link>
      </div>
    </>
  );
}
