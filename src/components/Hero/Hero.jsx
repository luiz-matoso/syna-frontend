import React from "react";

import styles from "./Hero.module.css";

import heroImage from "../../assets/heroImage.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Shorten your URL</h1>
        <p className={styles.description}>
          Shorten, share, and track your links effortlessly with Syna.
        </p>
        <a className={styles.heroButton} href="">
          Manage Links
        </a>
      </div>
      <img src={heroImage} alt="Hero image" className={styles.heroImage} />
    </section>
  );
};

export default Hero;
