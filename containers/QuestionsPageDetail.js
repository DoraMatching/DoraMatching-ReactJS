import React, { Component } from 'react'
import CardQuestionCenterDetail from '../components/QuestionsPage/CardQuestionCenterDetail';
import CardQuestionLeft from '../components/QuestionsPage/CardQuestionLeft';
import CardQuestionRight from '../components/QuestionsPage/CardQuestionRight';
import styles from '../styles/Home.module.css'


export default class QuestionsPageDetail extends Component {
  render() {
    return (
      <div className={styles.questionsPage}>
        <div style={{ width: "15%" }}>
          <CardQuestionLeft {...this.props}  />
        </div>
        <div style={{ width: "60%" }}>
          <CardQuestionCenterDetail {...this.props} />
        </div>
        <div style={{ width: "15%" }}>
          <CardQuestionRight />
        </div>
      </div>
    );
  }
}
