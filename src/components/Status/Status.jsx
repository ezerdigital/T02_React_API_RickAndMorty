import React from "react";
import styles from "./Status.module.css";

const Status = ({ status }) => {
  const bk =
    status === "Alive"
      ? "bk-alive"
      : status === "Dead"
      ? "bk-dead"
      : status === "unknown"
      ? "bk-unknown"
      : "";
  return <div className={`${styles.status} ${styles[bk]}`}>{status}</div>;
};

export default React.memo(Status);
