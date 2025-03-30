import React, { useEffect, useState } from "react";

import styles from "./ShortenItem.module.css";

import dayjs from "dayjs";
import * as clipboard from "clipboard-polyfill";
import { useStoreContext } from "../../../contextApi/ContextApi";
import { LiaCheckSolid } from "react-icons/lia";
import { IoCopy } from "react-icons/io5";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);

  const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(
    /^https?:\/\//,
    ""
  );

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = async () => {
    setLoader(true);
    try {
      const response = await api.get(
        "/api/urls/analytics/${selectedUrl}?startDate=2025-12-01T00:00:00&endDate=2025-12-31T23:59:59",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setAnalyticsData(response.data);
      setSelectedUrl("");
      console.log(response.data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  const handleCopy = async () => {
    try {
      await clipboard.writeText(
        `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${shortUrl}`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Error to copy:", err);
      textarea.value = `${
        import.meta.env.VITE_REACT_FRONT_END_URL
      }/s/${shortUrl}`;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.headerContent}>
            <a
              href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.title}
            >
              {subDomain}/{shortUrl}
            </a>
            <FaExternalLinkAlt className={styles.linkIcon} />
          </div>

          <div className={styles.urlContainer}>
            <h3 className={styles.originalUrl}>{originalUrl}</h3>
          </div>
        </div>
        <div className={styles.clicksContainer}>
          <div className={styles.clicksContent}>
            <span>
              <MdOutlineAdsClick className={styles.clickIcon} />
            </span>
            <span className={styles.clickCount}>{clickCount}</span>
            <span className={styles.clickText}>
              {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
            </span>
          </div>

          <div className={styles.dateContainer}>
            <span className={styles.calendarIcon}>
              <FaRegCalendarAlt />
            </span>
            <span className={styles.dateText}>
              {dayjs(createdDate).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>

        <div className={styles.actionsContainer}>
          <div
            onClick={handleCopy}
            className={styles.copyButton}
            aria-label={isCopied ? "Copied" : "Copy link"}
          >
            <button className={styles.copied}>
              {isCopied ? "Copied" : "Copy"}
            </button>
            {isCopied ? (
              <LiaCheckSolid className={styles.actionIcon} />
            ) : (
              <IoCopy className={styles.actionIcon} />
            )}
          </div>

          <div
            onClick={() => analyticsHandler(shortUrl)}
            className={styles.analyticsButton}
          >
            <button className={styles.analytics}>Analytics</button>
            <MdAnalytics className={styles.actionIcon} />
          </div>
        </div>
      </div>
      <React.Fragment>
        <div
          className={`${styles.analyticsContainer} ${
            analyticToggle ? styles.show : styles.hide
          }`}
        >
          {loader ? <div></div> : <div></div>}
        </div>
      </React.Fragment>
    </div>
  );
};

export default ShortenItem;
