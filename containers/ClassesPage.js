import React, { Component } from 'react'
import CardClassesLeft from '../components/ClassesPage/CardClassesLeft';
import CardClassesRight from '../components/ClassesPage/CardClassesRight';
import styles from '../styles/Home.module.css'

class ClassesPage extends Component {
  render() {
    return (
      <div className={styles.classesPage}>
        <div style={{ width: "70%" }}>
          <CardClassesLeft />
        </div>
        <div style={{ width: "20%", marginLeft: "20px" }}>
          <CardClassesRight />
        </div>
      </div>
    );
  }
}

export default ClassesPage;