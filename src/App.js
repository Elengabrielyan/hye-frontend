import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <MessengerCustomerChat
        pageId="2239009622804863"
        appId="2820850481506771"
      />
    </div>
  );
}

export default App;
