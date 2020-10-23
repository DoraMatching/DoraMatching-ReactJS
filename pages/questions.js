import React, { Component } from 'react';
import QuestionsPage from '../containers/QuestionsPage';
import styles from '../styles/Home.module.css'
import axios from 'axios';

function questions({questions}){
    return (
      <div className={styles.container} >
        <QuestionsPage questions={questions}/>
      </div>
    );
}

questions.getInitialProps = async () => {
  const {data} = await axios.get('https://api.dev.doramatching.tk/questions')
  return {questions: data.items}
}

export default questions;