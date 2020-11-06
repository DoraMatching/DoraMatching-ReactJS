import React from 'react'
import ClassesPage from '../containers/ClassesPage';

import styles from '../styles/Home.module.css'

function topics() {
  return (
    <div className={styles.container}>
      <ClassesPage />
    </div>
  )
}

export default topics;
