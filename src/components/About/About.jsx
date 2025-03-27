import React from "react";

import styles from "./About.module.css";

import lightIcon from "../../assets/lightIcon.png";
import sparklesIcon from "../../assets/sparklesIcon.png";
import graphIcon from "../../assets/graphIcon.png";
import aboutImage from "../../assets/aboutImage.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutImage} alt="About icon" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={lightIcon} alt="" />
            <div>
              <h3>Fast Link Shortening</h3>
              <p>Shorten your links in an instant!</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={sparklesIcon} alt="" />
            <div>
              <h3>Secure Links</h3>
              <p>Keep your links safe and private.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={graphIcon} alt="" />
            <div>
              <h3>Track Your Links</h3>
              <p>Get insights and analytics on your links’ performance.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
