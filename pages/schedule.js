import React from "react";
import CardSchedule from "../components/Schedule/fullcalendar";
import styles from "../styles/Home.module.css";

function topics() {
  return (
    <div className={styles.container}>
      <CardSchedule />
    </div>
  );
}

export default topics;
