import React, { Component } from 'react';
import CardLessonLeft from '../components/TopicPage/CardLessonLeft';
import CardLessonRight from '../components/TopicPage/CardLessonRight';
import styles from '../styles/Home.module.css';

class LessonPage extends Component {
  render() {
    return (
      <div className={styles.lessonPage}>
        <div style={{ width: "60%" }}>
          <CardLessonLeft />
        </div>
        <div style={{ width: "30%", marginLeft: "20px" }}>
          aaa
        </div>
      </div>
    );
  }
}

export default LessonPage;