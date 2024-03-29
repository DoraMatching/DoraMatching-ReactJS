import React, { Component } from 'react';
import CardQuestionCenter from '../components/QuestionsModule/QuestionsPage/CardQuestionCenter';
import CardQuestionLeft from '../components/QuestionsModule/QuestionsPage/CardQuestionLeft';
import CardQuestionRight from '../components/QuestionsModule/QuestionsPage/CardQuestionRight';
import styles from '../styles/Home.module.css';

class QuestionsPage extends Component {
    render() {
        return (
            <div className={styles.questionsPage}>
                <div style={{ width: '15%' }}>
                    <CardQuestionLeft {...this.props} />
                </div>
                <div style={{ width: '60%' }}>
                    <CardQuestionCenter {...this.props} />
                </div>
                <div style={{ width: '20%' }}>
                    <CardQuestionRight />
                </div>
            </div>
        );
    }
}

export default QuestionsPage;
