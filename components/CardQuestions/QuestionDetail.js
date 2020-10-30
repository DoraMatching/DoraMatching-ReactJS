import React from 'react';
import styles from './Question.module.css';

function QuestionDetail({question}) {
  console.log('L4', question);
  return (
    <div className={styles.questionCard}>
      <h3>{question.title} </h3>
      <p>{question.content}</p>
    </div>
  )
}

export default QuestionDetail;