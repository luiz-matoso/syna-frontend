import React from "react";

import styles from "./Navbar.module.css";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <button className={styles.button}>
              <Link to="/register" className={styles.buttonLink}>
                Register
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
