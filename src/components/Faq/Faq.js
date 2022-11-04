import React from "react";

import Question from "./Question";

import styles from "./faq.module.css";
import texts from "../../styles/texts.module.css";

const questions = {
  general: [
    {
      id: 0,
      title: "What does HYE Box do?",
      question:
        "HYE Box buys, packages, and exports different items and goods from small businesses in Armenia & Artsakh and then sends them out to our subscribers on a monthly basis. This allows those suffering businesses to flourish and develop.",
    },
    {
      id: 1,
      title: "Which type of products will I get in the box?",
      question:
        "In each box, you will find an incredible variety of natural cosmetics, tasty snacks, educational materials and arts and crafts items produced by the artists of Armenia and Artsakh.",
    },
    {
      id: 2,
      title: "Can I send the box as a gift?",
      question:
        "Sure! Just click on a monthly subscription, fill out the address of the person you wish to send your original HYE gift to, and we will send the box on your behalf.",
    },
    {
      id: 3,
      title: "Can I customize my box?",
      question:
        "We try to make each box as personalized as possible! During the subscription process you will fill the application where you will be given to share some personal preferences and information about your family members.",
    },

    {
      id: 4,
      title: "Can I purchase products I love?",
      question:
        "No. We do not have an online market where you can purchase just one or several items that you liked from our partner companies.",
    },
  ],

  billing: [
    {
      id: 0,
      title: "When will I be charged?",
      question:
        "Please note: When you join the subscription, your credit card will be charged immediately for your first subscription package and then each month you can update your subscription.",
    },
    {
      id: 1,
      title: "Can I cancel my subscription?",
      question:
        "You can cancel your subscription at any time, without fees or penalties.",
    },
    {
      id: 2,
      title: "What currency do you use?",
      question:
        "We currently charge in US dollars. Foreign currencies will be converted according to your bank's policies.",
    },
  ],

  shipping: [
    {
      id: 0,
      title: "When do you ship the box?",
      question:
        "We ship boxes at the start of each month. All boxes are personalized and hand-packed.",
    },
    {
      id: 1,
      title: "How much is shipping?",
      question: "Shipping cost is included in the price.",
    },
    {
      id: 2,
      title: "How long does delivery take?",
      question:
        "Depending on the date of your order, shipping can take between 10 and 40 business days for standard contiguous USA, Canada, and other international shipments.",
    },
    {
      id: 3,
      title: "How can I track my package?",
      question:
        "As soon as we send out your package, you will get an e-mail notification with all the details and tracking information so you can track your shipment from the moment the package is collected until it reaches its destination.",
    },
    {
      id: 4,
      title: "What if an item in my package is broken or missing?",
      question:
        "We work hard to ensure that you get to enjoy the best that Armenia and Artsakh have to offer. We pack everything to the best of our abilities. Items may get damaged during shipment. Please contact us at   support@hyebox.com if anything in your package is damaged or missing, and we will address the matter immediately.",
    },
  ],

  suppliers: [
    {
      id: 0,
      title: "Who are your suppliers?",
      question:
        "As a Social Enterprise we help only local businesses: small businesses, social enterprises and others.",
    },
    {
      id: 1,
      title: "I want to become a supplier!",
      question:
        "You are more than welcome! Please contact us on facebook messenger or by email:support@hyebox.com, and we will be happy to partner with you!",
    },
  ],

  returnRefunds: [
    {
      id: 0,
      title: "What is the return policy?",
      question:
        "We do not accept returns or exchanges at this time.Please note that cancellations are for future boxes only, and not for the boxes already paid for.",
    },
    {
      id: 1,
      title: "What if my box does not arrive?",
      question:
        "The estimated waiting period is up to 6 weeks. If your box does not make it within this time frame, you should notify us at  support@hyebox.com or using our contact form, so we can send you another box or refund you.",
    },
    {
      id: 2,
      title: "Can I receive a refund if I don't receive my package?",
      question:
        "We will always refund you if we've made a mistake with your order, however, we cannot offer refunds if your shipping address is incomplete or contains the wrong information. Please double check your shipping information when creating your subscription.",
    },
  ],
};

export default function Faq() {
  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <p>
        Armenia has never been this exciting. <br />
        Connect with your Motherland and make an impact!
      </p>

      <div>
        <h5 className={texts.faqQuestionTitle}>General</h5>
        {questions.general.map(({ id, title, question }) => {
          return <Question key={id} title={title} question={question} />;
        })}
      </div>

      <div>
        <h5 className={texts.faqQuestionTitle}>Billing</h5>
        {questions.billing.map(({ id, title, question }) => {
          return <Question key={id} title={title} question={question} />;
        })}
      </div>

      <div>
        <h5 className={texts.faqQuestionTitle}>Shipping</h5>
        {questions.shipping.map(({ id, title, question }) => {
          return <Question key={id} title={title} question={question} />;
        })}
      </div>

      <div>
        <h5 className={texts.faqQuestionTitle}>Suppliers</h5>
        {questions.suppliers.map(({ id, title, question }) => {
          return <Question key={id} title={title} question={question} />;
        })}
      </div>

      <div>
        <h5 className={texts.faqQuestionTitle}>Return & Refunds</h5>
        {questions.returnRefunds.map(({ id, title, question }) => {
          return <Question key={id} title={title} question={question} />;
        })}
      </div>
    </div>
  );
}
