import React, { Component } from 'react';
import QuestionsPage from '../containers/QuestionsPage';
import styles from '../styles/Home.module.css'

class questions extends Component {
  render() {
    return (
      <div className={styles.container}>
        <QuestionsPage />
      </div>
    );
  }
}

export default questions;