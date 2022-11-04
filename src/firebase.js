import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { setDoc, collection, query, getDocs, doc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5AOOTgtvtNAj8M4wx7bQ02HgqdXG0gYc",
  authDomain: "hye-box.firebaseapp.com",
  databaseURL: "https://hye-box.firebaseio.com",
  projectId: "hye-box",
  storageBucket: "hye-box.appspot.com",
  messagingSenderId: "1049112850368",
  appId: "1:1049112850368:web:7e3aff4baa83980ec12225",
  measurementId: "G-66D7EZJE9V",
};

const app = initializeApp(firebaseConfig);

let DOCUMENT_ID;
const db = getFirestore();

async function addInfo(info, orderId) {
  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  DOCUMENT_ID = makeid(12);

  await setDoc(doc(db, "PaymentInfo", orderId), info);
}

function getId() {
  return DOCUMENT_ID;
}

async function getPromoCodes(value) {
  let discount;
  const arr = [];
  const q = query(collection(db, "PromoCodes"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });

  arr.forEach((el) => {
    if (!!el[value]) {
      discount = el[value];
    }
  });

  return discount;
}

export { addInfo, getId, getPromoCodes };
