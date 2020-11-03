import Link from 'next/link'
import React from 'react'
import Class from '../CardClasses/Class'
import CardTopicsJoined from './CardTopicsJoined'
import styles from './CardTopicsPage.module.css'

export default function CardTopicsLeft() {
  return (
    <div className={styles.cardTopicsLeft}>
      <h3>Topics Management</h3>
      <div> <CardTopicsJoined /> </div>
      <button className={styles.cardTopicsLeftButton}>Add Class</button>
      <h3>All Topics</h3>
      <div className={styles.cardAllTopics}>
        <Link href='/'><a>aaa</a></Link>
        <Class />
        <Class />
        <Class />
      </div>
    </div>
  )
}
