import React, { Component } from "react";
import CardQuestionCenter from "../components/QuestionsPage/CardQuestionCenter";
import CardQuestionLeft from "../components/QuestionsPage/CardQuestionLeft";
import CardQuestionRight from "../components/QuestionsPage/CardQuestionRight";
import styles from "../styles/Home.module.css";
import TagQuestionsPage from "./TagQuestionPage";

class QuestionsPage extends Component {
  render() {
    return (
      <div className={styles.questionsPage}>
        <div style={{ width: "15%" }}>
          <CardQuestionLeft {...this.props} />
        </div>
        <div style={{ width: "60%" }}>
          <CardQuestionCenter {...this.props} />
        </div>
        <div style={{ width: "20%" }}>
          <CardQuestionRight />
        </div>
      </div>
    );
  }
}

export default QuestionsPage;
