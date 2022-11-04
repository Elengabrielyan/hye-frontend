import React, { useState } from "react";
import { Link } from "react-router-dom";

import SocialNetworks from "../SocialNetworks/SocialNetworks";
import BoxButton from "../BoxButton/BoxButton";
import Navbar from "../Navbar/Navbar";
import DropdownNavbar from "../Navbar/DropdownNavbar/DropdownNavbar";

import paths from "../../paths";

import styles from "./header.module.css";

import logo from "./pics/logo.png";

const classNames = require("classnames");

export default function Header() {
  const [isScroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const headerClass = classNames({
    [styles.scrollable]: isScroll,
  });

  return (
    <header className={headerClass}>
      <Link
        to={paths.home}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>

      <Navbar />
      <DropdownNavbar />
      <SocialNetworks />
      <BoxButton path={paths.pricing} />
    </header>
  );
}
