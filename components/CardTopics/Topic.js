import React from 'react';
import Link from 'next/link';
import styles from './Topic.module.scss'

function Topic(props) {
  return (
    <div className={styles.topicCard}>
      <div className={styles.topicMeta}>
        <div className={styles.topicPhoto}></div>
        <ul className={styles.topicDetails}>
          <li className={styles.topicAuthor}>
            <Link href="/">
              <a>John Doe</a>
            </Link>
          </li>
          <li className={styles.topicDate}>Aug. 24, 2015</li>
        </ul>
      </div>
      <div className={styles.topicDescription}>
        <h1>Learning to Code</h1>
        <h2>Opening a door to the future</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque
          ad aliquam facilis numquam. Veritatis, sit.
        </p>
        <p className={styles.topicReadmore}>
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
}

export default Topic;