import React, { useState } from "react";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

// import validation from "../../auxiliary/validation";

import styles from "./subscribe.module.css";

import addToSheets from "../../auxiliary/addToSheets";

function createNotification(type) {
  if (type === "error") {
    return NotificationManager.error("Invalid email.");
  } else if (type === "success") {
    return NotificationManager.success("Thanks for subscribing!");
  }
}

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const isValidEmail = email.match(mailFormat);

  return (
    <div className={styles.subscribe}>
      <h3>Sign up for updates and news</h3>
      <p>Get highlights and special offesr twice a month</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isValidEmail &&
            addToSheets(
              [email],
              "https://v1.nocodeapi.com/hyebox/google_sheets/jZkoPBeWsMnFXNwg",
              () => {
                setEmail("");
              }
            );
        }}
      >
        <input
          type="text"
          placeholder="Your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            if (isValidEmail) {
              createNotification("success");
            } else {
              createNotification("error");
            }
          }}
        >
          SUBSCRIBE
        </button>
      </form>

      <NotificationContainer />
    </div>
  );
}
