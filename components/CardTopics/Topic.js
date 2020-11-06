import React from "react";
import Link from "next/link";
import styles from "./Topic.module.scss";

function Topic(props) {
  return (
    <div className={styles.topicCard}>
      <div className={styles.topicMeta}>
        <div className={styles.topicPhoto}></div>
      </div>
      <div className={styles.topicDescription}>
        <h1>Learning to Code</h1>
        <h2>Opening a door to the future</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis
        </p>
        <p className={styles.topicReadmore}>
          <Link href='/classes'><a>See all</a></Link>
        </p>
      </div>
    </div>
  );
}

export default Topic;
