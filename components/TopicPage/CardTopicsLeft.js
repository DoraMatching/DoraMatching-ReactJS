import Link from "next/link";
import React from "react";
import { useAuth } from "../../contexts/auth";
import Topic from "../CardTopics/Topic";
import CardTopicsJoined from "./CardTopicsJoined";
import styles from "./CardTopicsPage.module.scss";
import CreateClass from "./CreateClass";
import CreateTopic from "./CreateTopic";

export default function CardTopicsLeft({ topics }) {
  const { user } = useAuth();
  console.log('L12', user);
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>Classes Management</h3>
      <div>
        <CardTopicsJoined />
      </div>
      {user && user.roles.indexOf("TRAINER") !== -1 ? (
        <>
          <CreateTopic />
          <CreateClass />
        </>
      ) : (
        ""
      )}

      <h3>All Topics</h3>
      <div className={styles.cardAllTopics}>
        {topics.map((topic, id) => {
          return <Topic topic={topic} key={id} />;
        })}
      </div>
    </div>
  );
}
