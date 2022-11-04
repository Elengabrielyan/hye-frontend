import axios from "axios";
import qs from "querystring";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import addToSheets from "../../auxiliary/addToSheets";
import { addInfo } from "../../firebase";
import pic from "../Purchase/pics/big_box.png";
import styles from "./purchase.module.css";

export default function Success() {
  const { search } = useLocation();
  const [date, setDate] = useState("");
  const paymentInfo = {
    selectedBox: JSON.parse(localStorage.getItem("Selected Box")),
    customerInfo: JSON.parse(localStorage.getItem("Payment Info")),
    subscription: JSON.parse(localStorage.getItem("Subscription")),
    formInfo: JSON.parse(localStorage.getItem("Form Info")),
    finalPrice: JSON.parse(localStorage.getItem("Final Price")),
  };

  const { userEmail, userName, orderId } = qs.parse(search.replace("?", ""));
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

    axios.post("https://hye-payment.herokuapp.com/send-email", {
      userEmail,
      userName,
      orderNumber: orderId,
    });

    addInfo(paymentInfo, orderId);
    addToSheets(
      [
        paymentInfo.customerInfo.email,
        paymentInfo.customerInfo.firstName,
        paymentInfo.customerInfo.lastName,
        paymentInfo.customerInfo.address,
        paymentInfo.customerInfo.city,
        paymentInfo.customerInfo.state,
        paymentInfo.customerInfo.zipCode,
        paymentInfo.selectedBox.price,
        paymentInfo.selectedBox.title,
        paymentInfo.subscription.period,
        paymentInfo.subscription.price,
        paymentInfo.formInfo.members[0].content,
      ],
      "https://v1.nocodeapi.com/hyebox/google_sheets/AtEEioktCyHhuBDQ"
    );
  }, [userEmail, userName, orderId]);

  return (
    <div className={styles.purchase}>
      <div className={styles.purchaseInfo}>
        <h1>Thank You For Purchasing Your Subscription!</h1>

        <h5>Order Details:</h5>

        <p>
          Date of order: <span>{date}</span>
        </p>
        <p>
          Order number: <span>{orderId || "---"}</span>
        </p>
      </div>

      <div className={styles.picContainer}>
        <img className={styles.pic} src={pic} alt="order item pic" />
      </div>
    </div>
  );
}
