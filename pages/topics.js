import React from 'react'
import TopicsPage from '../containers/TopicsPage';
import styles from '../styles/Home.module.css'

function topics() {
  return (
    <div className={styles.container}>
      <TopicsPage />
    </div>
  )
}

export default topics;
