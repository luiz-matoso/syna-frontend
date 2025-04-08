import React from "react";
import styles from "./HowItWorks.module.css";

import howImage from "../../assets/howIcon.png";

const HowItWorks = () => {
  return (
    <section className={styles.container} id="howitworks">
      <div className={styles.header}>
        <h2 className={styles.title}>How It Works</h2>
        <p className={styles.subtitle}>
          Just 4 simple steps to shorten your link
        </p>
      </div>
      <div className={styles.content}>
        <ul className={styles.steps}>
          <li className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <h3>Access Dashboard</h3>
              <p>Sign in and access to dashboard.</p>
            </div>
          </li>
          <li className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <h3>Click "Create a New Short URL"</h3>
              <p>Click the button and paste your link.</p>
            </div>
          </li>
          <li className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <h3>Click create</h3>
              <p>We instantly generate a short, shareable URL for you.</p>
            </div>
          </li>
          <li className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div>
              <h3>Share It!</h3>
              <p>Copy your new link and share it anywhere you'd like.</p>
            </div>
          </li>
        </ul>
        <img
          className={styles.howImage}
          src={howImage}
          alt="How it works illustration"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
