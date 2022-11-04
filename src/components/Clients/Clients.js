import React from "react";

import Client from "./Client";

import styles from "./clients.module.css";

const clients = [
  {
    id: 0,
    pic: require("./pics/melanie.jpg").default,
    name: "Naïry Yemenidjian",
    company: "Company & Co.",
    review:
      "I received my box today, and I am overwhelmed with emotions! You have captured the heart and soul of Armenia.",
  },
  {
    id: 1,
    pic: require("./pics/Lisa.jpg").default,
    name: "Lisa",
    company: "Company & Co.",
    review:
      "Barev dzez! I just opened my April box and everything is wonderful! It’s the perfect way to learn about and support local vendors. Totally impressed. Thank you!",
  },
  {
    id: 2,
    pic: require("./pics/Mari_B.jpg").default,
    name: "Maria Baghdasaryan",
    company: "Company & Co.",
    review:
      "My box came today, and it's so heartwarming. It made me emotional!! I absolutely love it.",
  },

  {
    id: 3,
    pic: require("./pics/Suzanne.jpg").default,
    name: "Syuzanne Harutyunnyan",
    company: "Company & Co.",
    review: "Thank you for tHe box it brought smiles to my daughter and me. ",
  },
];

export default function Clients() {
  return (
    <>
      <h3 className={styles.clientsTitle}>Our customers love us</h3>
      <div className={styles.clients}>
        {clients.map(({ id, pic, name, company, review }) => {
          return (
            <Client
              key={id}
              pic={pic}
              name={name}
              company={company}
              review={review}
            />
          );
        })}
      </div>
    </>
  );
}
