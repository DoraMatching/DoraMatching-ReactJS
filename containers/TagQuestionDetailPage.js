import React, { Component } from 'react'

import CardQuestionLeft from '../components/QuestionsPage/CardQuestionLeft';
import CardQuestionRight from '../components/QuestionsPage/CardQuestionRight';
import CardTagQuestionDetail from '../components/QuestionsPage/CardTagQuestionDetail';
import styles from '../styles/Home.module.css'


export default class TagQuestionDetailPage extends Component {
  render() {
    return (
      <div className={styles.questionsPage}>
        <div style={{ width: "15%" }}>
          <CardQuestionLeft {...this.props}  />
        </div>
        <div style={{ width: "60%" }}>
          <CardTagQuestionDetail {...this.props} />
        </div>
        <div style={{ width: "15%" }}>
          <CardQuestionRight />
        </div>
      </div>
    );
  }
}
