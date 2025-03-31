import React from "react";

import { TailSpin } from "react-loader-spinner";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#6c4ab6"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
