import React, { useState } from "react";
import Graph from "./Graph/Graph";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";
import { useStoreContext } from "../../contextApi/ContextApi";
import { FaLink } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import ShortenPopUp from "./ShortenPopUp/ShortenPopUp";
import ShortenUrlList from "./ShortenUrlList/ShortenUrlList";
import Loader from "../Loader/Loader";

const Dashboard = () => {
  const { token } = useStoreContext();
  const [shortenPopUp, setShortenPopUp] = useState(false);
  const [loader, setLoader] = useState(false);

  function onError() {
    navigate("/error");
  }

  const { data, isLoading, isError, error } = useFetchTotalClicks(
    token,
    onError
  );

  const {
    data: myShortenUrls = [],
    isLoading: isMyShortUrlsLoading,
    isError: isMyShortUrlsError,
    error: myShortUrlsError,
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const hasData = data && data.length > 0;
  const hasShortUrls = myShortenUrls?.length > 0;

  if (isLoading || isMyShortUrlsLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (isMyShortUrlsError) return <div>Error: {myShortUrlsError.message}</div>;

  return (
    <div className={styles.dashboardContainer}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <header className={styles.dashboardHeader}>
            <h1>Dashboard</h1>
          </header>
          <div className={styles.dashboardContent}>
            <div className={styles.graphContainer}>
              {hasData ? (
                <Graph graphData={data} />
              ) : (
                <div className={styles.noDataMessage}>
                  <p>No data found</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.createUrlContainer}>
            <button
              className={styles.createUrlButton}
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>
          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className={styles.noLinkContainer}>
                <div className={styles.noLink}>
                  <FaLink className={styles.linkIcon} />
                  <h1 className={styles.noLinkTitle}>
                    You haven't created any shorten url yet.
                  </h1>
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </>
      )}
      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default Dashboard;
