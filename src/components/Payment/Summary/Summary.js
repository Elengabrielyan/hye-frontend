import axios from "axios";
import React, { useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { getPromoCodes } from "../../../firebase";
import famBox from "../pics/famBox.png";
import styles from "./summary.module.css";

function createNotification(type, message) {
  if (type === "error") {
    return NotificationManager.error(message);
  } else if (type === "success") {
    return NotificationManager.success(message);
  }
}

export default function Summary({
  info,
  handleInfo,
  email,
  name,
  validation,
  customerInfo,
}) {
  const [discount, setDiscount] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState(() => {
    return {
      box: JSON.parse(localStorage.getItem("Selected Box")),
      subscription: JSON.parse(localStorage.getItem("Subscription")),
      formInfo: JSON.parse(localStorage.getItem("Form Info")),
      paymentInfo: info,
    };
  });

  const getFinalPrice = () => {
    let finalPrice;
    const [boxTitle, subscribtionPeriod] = [
      paymentInfo.box.title,
      paymentInfo.subscription.period,
    ];

    const switcher = (...rest) => {
      switch (subscribtionPeriod) {
        case "Monthly":
        case "One time":
          return rest[0];
        case "3 Months":
          return rest[1];
        case "6 Months":
          return rest[2];
        case "12 Months":
          return rest[3];
        default:
          return 100000;
      }
    };

    if (boxTitle === "Regular Box") {
      finalPrice = switcher(71.8, 206, 412, 790);
    } else if (boxTitle === "Family Box") {
      finalPrice = switcher(111.8, 326, 641, 1235);
    }

    if (discount !== 0) {
      finalPrice -= finalPrice * (discount / 100);
    }

    return Number(finalPrice.toFixed(2));
  };

  const finalPrice = getFinalPrice();

  const exchange = (val) => {
    let exchangedPrice;
    switch (val) {
      case 71.8:
        exchangedPrice = 34300;
        break;
      case 111.8:
        exchangedPrice = 53400;
        break;
      case 206:
        exchangedPrice = 98400;
        break;
      case 326:
        exchangedPrice = 155500;
        break;
      case 412:
        exchangedPrice = 184500;
        break;
      case 641:
        exchangedPrice = 306000;
        break;
      case 790:
        exchangedPrice = 375400;
        break;
      case 1235:
        exchangedPrice = 589000;
        break;
      default:
        exchangedPrice = 100000000;
        break;
    }

    return exchangedPrice * 100;
  };

  function setInLocalStorage() {
    handleInfo();
    localStorage.setItem("Payment Info", JSON.stringify(info));
    localStorage.setItem("Final Price", JSON.stringify(finalPrice));
  }

  return (
    <div className={styles.total}>
      <NotificationContainer />

      <div className={styles.orderInfo}>
        <h5>Summary</h5>
        <div>
          <img src={famBox} className={styles.choosenBoxPic} alt="box pic" />
          <div>
            <p className={styles.price}>
              {paymentInfo.box.title}
              <span className={styles.priceTag}>
                {paymentInfo.subscription.price}
              </span>
            </p>
            <p className={styles.price}>
              Shipping fee
              <span className={styles.priceTag}>12.99$</span>
            </p>

            <input
              type="text"
              placeholder="Enter promo code"
              className={styles.promoCode}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getPromoCodes(e.target.value)
                    .then((disc) => {
                      setDiscount(disc);
                      return disc;
                    })
                    .then((disc) => {
                      if (typeof disc === "number" && disc > 0) {
                        createNotification("success", "Invalid promo code.");
                      } else {
                        createNotification(
                          "error",
                          "Promo code successfully used."
                        );
                      }
                    });
                  e.target.value = "";
                }
              }}
            />

            <p className={`${styles.totalPrice} ${styles.price}`}>
              Total
              <span className={styles.priceTag}>{`${finalPrice}$`}</span>
            </p>

            <button
              className={styles.submit}
              onClick={() => {
                if (!validation()) {
                  createNotification("error", "Please, fill in all fields.");
                  return 0;
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
                setInLocalStorage();
                // exchange(finalPrice);
                axios
                  .post("https://hye-payment.herokuapp.com/pay", {
                    price: exchange(finalPrice),
                    // price: 1000,
                    userEmail: email,
                    currency: "051",
                    userName: name,
                  })
                  .then((response) => {
                    console.log("RETURNED DATA FROM ARCA::", response);
                    const link = document.createElement("a");
                    link.href = response.data.formUrl;
                    link.id = "order-link";
                    link.target = "_blank";
                    document.body.appendChild(link);
                    document.getElementById("order-link").click();
                  })
                  .catch(console.log);
              }}
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
