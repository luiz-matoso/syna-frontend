import React, { useState } from "react";
import Graph from "./Graph";
import { useFetchTotalClicks } from "../../hooks/useQuery";
import { useStoreContext } from "../../contextApi/ContextApi";

import styles from "./Dashboard.module.css";
import ShortenPopUp from "./ShortenPopUp/ShortenPopUp";

const Dashboard = () => {
  const refetch = false;
  const { token } = useStoreContext();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const onError = (error) => {
    console.error("Error:", error);
  };

  const { data, isLoading, isError, error } = useFetchTotalClicks(
    token,
    onError
  );

  console.log({ isLoading, isError, data, error });

  const hasData = data && data.length > 0;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.dashboardContainer}>
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
          onClick={() => {
            setShortenPopUp(true);
          }}
        >
          Create a New Short URL
        </button>
      </div>
      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default Dashboard;
