import React, { useState } from "react";

import NavbarList from "../NavbarList";
import BoxButton from "../../BoxButton/BoxButton";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";

import paths from "../../../paths";

import styles from "./dropdownNavbar.module.css";

import dropdown from "../pics/dropdownBtn.png";

export default function DropdownNavbar() {
  const [isActive, setActive] = useState(false);

  function closeNavbar() {
    setActive(false);
  }

  if (isActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <button
        className={styles.dropdownBtn}
        onClick={() => {
          setActive(!isActive);
        }}
      >
        <img src={dropdown} alt="dropdown navbar button" />
      </button>

      {isActive && (
        <nav className={styles.dropdownNavbar}>
          <NavbarList closeNav={closeNavbar} />
          <BoxButton path={paths.pricing} closeNav={closeNavbar} />
          <SocialNetworks />
        </nav>
      )}
    </>
  );
}
