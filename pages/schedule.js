import React from "react";
import Schedule from "../components/Schedule/ScheduleTrainer";
import styles from "../styles/Home.module.css";

function topics() {
  return (
    <div className={styles.container}>
      <Schedule />
    </div>
  );
}



export default topics;
