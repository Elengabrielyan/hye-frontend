import React from "react";
import { Route, Switch } from "react-router-dom";
import paths from "../../paths";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import BoxSelection from "../BoxSelection/BoxSelection";
import FacebookPixel from "../FacebookPixel";
import Faq from "../Faq/Faq";
import Form from "../Form/Form";
import HomePage from "../HomePage";
import Payment from "../Payment/Payment";
import PricingPage from "../PricingPage";
import Subscription from "../Subscription/Subscription";
import Success from "../Success/Success";
import "./main.css";

export default function Main() {
  return (
    <main>
      <FacebookPixel />
      <Switch>
        <Route exact path={paths.home}>
          <HomePage />
        </Route>

        <Route exact path={paths.pricing}>
          <PricingPage />
        </Route>

        <Route path={paths.aboutUs}>
          <AboutUsPage />
        </Route>

        <Route path={paths.faq}>
          <Faq />
        </Route>

        <Route path={paths.boxSelection}>
          <BoxSelection />
        </Route>

        <Route path={paths.subscription}>
          <Subscription />
        </Route>

        <Route path={paths.form}>
          <Form />
        </Route>

        <Route path={paths.payment}>
          <Payment />
        </Route>

        {/* <Route path={paths.purchase}>
          <Purchase />
        </Route> */}

        <Route path={paths.success}>
          <Success />
        </Route>
      </Switch>
    </main>
  );
}
