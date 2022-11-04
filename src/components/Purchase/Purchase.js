import React, { useState, useEffect } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import { getId } from "../../firebase";

import styles from "./purchase.module.css";

import pic from "./pics/big_box.png";

export default function Purchase() {
  const [date, setDate] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleOrderDate = () => {
    const orderDate = new Date();
    switch (orderDate.getMonth()) {
      case 0:
        setDate(`January ${orderDate.getDate()}`);
        break;
      case 1:
        setDate(`February ${orderDate.getDate()}`);
        break;
      case 2:
        setDate(`March ${orderDate.getDate()}`);
        break;
      case 3:
        setDate(`April ${orderDate.getDate()}`);
        break;
      case 4:
        setDate(`May ${orderDate.getDate()}`);
        break;
      case 5:
        setDate(`June ${orderDate.getDate()}`);
        break;
      case 6:
        setDate(`July ${orderDate.getDate()}`);
        break;
      case 7:
        setDate(`August ${orderDate.getDate()}`);
        break;
      case 8:
        setDate(`September ${orderDate.getDate()}`);
        break;
      case 9:
        setDate(`October ${orderDate.getDate()}`);
        break;
      case 10:
        setDate(`November ${orderDate.getDate()}`);
        break;
      case 11:
        setDate(`December ${orderDate.getDate()}`);
        break;
      default:
        setDate("Undefined");
        break;
    }
  };

  useEffect(() => {
    handleOrderDate();
    setOrderId(getId());
  }, []);

  return (
    <>
      <ProgressBar fill="99%" color="#6FCF97" />
      <div className={styles.purchase}>
        <div className={styles.purchaseInfo}>
          <h1>Thank You For Purchasing Your Subscription!</h1>

          <h5>Order Details:</h5>

          <p>
            Date of order: <span>{date}</span>
          </p>
          <p>
            Amount paid:{" "}
            <span>$ {JSON.parse(localStorage.getItem("Final Price"))}</span>
          </p>
          <p>
            Order number: <span>{orderId}</span>
          </p>
        </div>

        <div className={styles.picContainer}>
          <img className={styles.pic} src={pic} alt="pic" />
        </div>
      </div>
    </>
  );
}
