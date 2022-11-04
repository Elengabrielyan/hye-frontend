import React from "react";
import { NavLink } from "react-router-dom";

import paths from "../../paths";

import styles from "./navbar.module.css";

export default function NavbarList({ closeNav }) {
  return (
    <>
      <NavLink
        exact
        to={paths.home}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        onClick={() => {
          if (closeNav !== undefined) {
            closeNav();
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={paths.pricing}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        onClick={() => {
          if (closeNav !== undefined) {
            closeNav();
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Pricing
      </NavLink>
      <NavLink
        to={paths.aboutUs}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        onClick={() => {
          if (closeNav !== undefined) {
            closeNav();
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        About Us
      </NavLink>
      <NavLink
        to={paths.faq}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        onClick={() => {
          if (closeNav !== undefined) {
            closeNav();
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        F.A.Q
      </NavLink>
    </>
  );
}
