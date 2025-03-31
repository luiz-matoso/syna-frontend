import React from "react";

import { GoAlertFill } from "react-icons/go";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const Error = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <GoAlertFill className={styles.icon} />
      <h1 className={styles.title}>Oops! Something went wrong.</h1>
      <p className={styles.subtitle}>
        {message ? message : "An unexpected error has occured."}
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={styles.button}
      >
        <IoArrowBackCircleSharp className={styles.icon2} />
        Go back to home.
      </button>
    </div>
  );
};

export default Error;
