import React, { Component } from 'react'
import styles from '../styles/Home.module.css'


export default class QuestionsPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.questionsPage}>
          <div style={{ width: "15%" }}><CardQuestionLeft /></div>
          <div style={{ width: "60%" }}>
            <CardQuestionCenter />
            <CardQuestionCenter />
            <CardQuestionCenter />
            <CardQuestionCenter />
          </div>
          <div style={{ width: "15%" }}><CardQuestionRight /> </div>
        </div>
      </div>
    );
  }
}