import React, { useState } from "react";

import styles from "./Navbar.module.css";

import logo from "../../assets/logo2.png";
import menuIcon from "../../assets/menuIcon.png";
import closeIcon from "../../assets/closeIcon.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? menuIcon : closeIcon}
          alt="Menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
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
