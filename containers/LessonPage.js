import React, { Component } from 'react';
import CardLessonLeft from '../components/TopicPage/CardLessonLeft';
import CardLessonRight from '../components/TopicPage/CardLessonRight';
import styles from '../styles/Home.module.css';

class LessonPage extends Component {
  render() {
    return (
      <div className={styles.lessonPage}>
        <div style={{ width: "60%" }}>
          <CardLessonLeft {...this.props} />
        </div>
        <div style={{ width: "25%", marginLeft: "20px" }}>
          <CardLessonRight {...this.props} />
        </div>
      </div>
    );
  }
}

export default LessonPage;