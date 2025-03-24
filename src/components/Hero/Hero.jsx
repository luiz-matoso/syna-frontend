import React from "react";

import styles from "./Hero.module.css";

import heroImage from "../../assets/heroImage.png";
import { useStoreContext } from "../../contextApi/ContextApi";

const Hero = () => {
  const { token } = useStoreContext();
  console.log("TOKEN FROM HERO PAGE: " + token);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Shorten your URL</h1>
        <p className={styles.description}>
          Shorten, share, and track your links effortlessly with Syna.
        </p>
        <div className={styles.buttonsContainer}>
          <a className={styles.heroButton} href="">
            Manage links
          </a>
          <a className={styles.heroButton2} href="">
            Create short link
          </a>
        </div>
      </div>
      <img src={heroImage} alt="Hero image" className={styles.heroImage} />
    </section>
  );
};

export default Hero;
