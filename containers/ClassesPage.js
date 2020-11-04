import React, { Component } from 'react';
import CardClassesLeft from '../components/TopicPage/CardClassesLeft';
import CardTopicsRight from '../components/TopicPage/CardTopicsRight';
import styles from '../styles/Home.module.css';

class ClassesPage extends Component {
  render() {
    return (
      <div className={styles.classesPage}>
        <div style={{ width: "60%" }}>
          <CardClassesLeft />
        </div>
        <div style={{ width: "30%", marginLeft: "20px" }}>
          <CardTopicsRight />
        </div>
      </div>
    );
  }
}

export default ClassesPage;