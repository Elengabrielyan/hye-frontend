import React from "react";

import NavbarList from "./NavbarList";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <NavbarList />
      </nav>
    </>
  );
}
