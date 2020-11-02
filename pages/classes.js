import React from 'react'
import ClassesPage from '../containers/ClassesPage'
import styles from '../styles/Home.module.css'

function classes() {
  return (
    <div className={styles.container}>
      <ClassesPage />
    </div>
  )
}

export default classes;
