import React from "react";
import Class from "../CardClasses/Class";
import styles from "./CardTopicsPage.module.css";
import CreateClass from "./CreateClass";

export default function CardLessonLeft() {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>All Classes</h3>
      <div className={styles.cardAllClass}>
        <Class />
        <Class />
        <Class />
        <Class />
      </div>
    </div>
  );
}
