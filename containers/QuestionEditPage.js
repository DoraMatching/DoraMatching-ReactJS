import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import CardQuestionLeft from "../components/QuestionsModule/QuestionsPage/CardQuestionLeft";
import EditQuestion from "../components/QuestionsModule/QuestionsPage/EditQuestions";
import CardQuestionRight from "../components/QuestionsModule/QuestionsPage/CardQuestionRight";


export default class QuestionsEditPage extends Component {
  render() {
    return (
      <div className={styles.questionsPage}>
        <div style={{ width: "15%" }}>
          <CardQuestionLeft {...this.props}  />
        </div>
        <div style={{ width: "60%" }}>
          <EditQuestion {...this.props} />
        </div>
        <div style={{ width: "20%" }}>
          <CardQuestionRight />
        </div>
      </div>
    );
  }
}
