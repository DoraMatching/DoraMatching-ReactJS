import Link from 'next/link'
import React from 'react'
import Class from '../CardClasses/Class'
import Topic from '../CardTopics/Topic'
import CardTopicsJoined from './CardTopicsJoined'
import styles from './CardTopicsPage.module.css'

export default function CardTopicsLeft() {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>Topics Management</h3>
      <div>
        <CardTopicsJoined />
      </div>
      <button className={styles.cardTopicsLeftButton}>Add Class</button>
      <h3>All Topics</h3>
      <div className={styles.cardAllTopics}>
        <Topic />
      </div>
    </div>
  );
}
