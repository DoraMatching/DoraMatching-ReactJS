import React, { Component } from 'react'
import CardQuestionCenter from '../components/QuestionsPage/CardQuestionCenter';
import CardQuestionLeft from '../components/QuestionsPage/CardQuestionLeft';
import CardQuestionRight from '../components/QuestionsPage/CardQuestionRight';
import styles from '../styles/Home.module.css'


export default class QuestionsPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.questionsPage}>
          <div style={{ width: "15%" }}><CardQuestionLeft /></div>
          <div style={{ width: "60%" }}>
            <CardQuestionCenter {...this.props}/>
          </div>
          <div style={{ width: "15%" }}><CardQuestionRight /> </div>
        </div>
      </div>
    );
  }
}
