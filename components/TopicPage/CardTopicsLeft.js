import Link from 'next/link'
import React from 'react'
import Topic from '../CardTopics/Topic'
import CardTopicsJoined from './CardTopicsJoined'
import styles from './CardTopicsPage.module.css'
import CreateClass from './CreateClass'

export default function CardTopicsLeft({topics}) {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>Classes Management</h3>
      <div>
        <CardTopicsJoined />
      </div>
      <CreateClass />
      <h3>All Topics</h3>
      <div className={styles.cardAllTopics}>
        {topics.map((topic, id) => {
          return <Topic topic={topic} key={id} />
        })}
      </div>
    </div>
  );
}
