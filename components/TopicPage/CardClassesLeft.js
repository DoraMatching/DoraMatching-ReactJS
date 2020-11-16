import React from "react";
import Class from "../CardClasses/Class";
import CardTopicsJoined from "./CardTopicsJoined";
import styles from "./CardTopicsPage.module.scss";
import CreateClass from "./CreateClass";
import CreateTopic from "./CreateTopic";

export default function CardClassesLeft() {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>Topics Management</h3>
      <div>
        <CardTopicsJoined />
      </div>
      <CreateTopic />
      <CreateClass />
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
