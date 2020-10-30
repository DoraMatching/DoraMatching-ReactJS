import React from 'react';
import QuestionsPageDetail from '../../../containers/QuestionPageDetail';
import styles from '../../../styles/Home.module.css'
import axios from 'axios'

function question({question}) {
  return (
    <div className={styles.container}>
      <QuestionsPageDetail question={question} />
    </div>
  );
}

question.getInitialProps = async ({query: {id}}) => {
  const {data} = await axios.get(`https://api.dev.doramatching.tk/question/${id}`);
  return {question: data}
}

export default question;