import React from "react";
import Link from "next/link";
import styles from "./Topic.module.scss";
import { Button } from "semantic-ui-react";

function Topic({ topic }) {
  console.log('L6', topic);
  return (
    <div className={styles.topicCard}>
      <div className={styles.topicMeta}>
        <div className={styles.topicPhoto}>
          <img
            src={topic.featuredImage}
            alt="topicPhoto"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className={styles.topicDescription}>
        <h1>{topic.name}</h1>
        <h2>{topic.author.user.name}</h2>
        <p>{topic.description}</p>
        <Button className={styles.topicReadmore}>
          <Link href="/classes">
            <a>See all</a>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Topic;
