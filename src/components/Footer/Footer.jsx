import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo2.png";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <img className={styles.logo} src={logo} alt="" />
        <p>Simplifying URL shortening for efficient sharing</p>
      </div>

      <p className={styles.rights}>&copy; 2024 Syna. All rights reserved.</p>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook
              color="#f87d37"
              style={{ cursor: "url('/hand.cur'), pointer" }}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter
              color="#f87d37"
              style={{ cursor: "url('/hand.cur'), pointer" }}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram
              color="#f87d37"
              style={{ cursor: "url('/hand.cur'), pointer" }}
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin
              color="#f87d37"
              style={{ cursor: "url('/hand.cur'), pointer" }}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
