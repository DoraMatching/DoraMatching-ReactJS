import React from 'react'
import LessonPage from '../containers/LessonPage';

import styles from '../styles/Home.module.css'

function topics() {
  return (
    <div className={styles.container}>
      <LessonPage />
    </div>
  )
}

export default topics;