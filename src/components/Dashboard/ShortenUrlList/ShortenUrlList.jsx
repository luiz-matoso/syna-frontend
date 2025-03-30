import React from "react";

import styles from "./ShortenUrlList.module.css";
import ShortenItem from "../ShortenItem/ShortenItem";

const ShortenUrlList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShortenUrlList;
