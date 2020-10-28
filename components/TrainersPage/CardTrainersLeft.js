import React, { Component } from 'react'
import styles from './CardTrainers.module.css'

export default class CardTrainersLeft extends Component {
  render() {
    return (
      <div>
        <h3>All Trainers</h3>
        <div className={styles.cardTrainersLeftDetail}>
          <div className={styles.topTrainerCardContainer}>
            <img
              className={styles.round}
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"
              alt="user"
              width="90px"
            />
            <h3>Curtis Tran</h3>
            <div className={styles.topTrainerButton}>
              <button className={styles.primary}>Follow</button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h4>Top Skills</h4>
              <ul>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
          <div className={styles.topTrainerCardContainer}>
            <img
              className={styles.round}
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"
              alt="user"
              width="90px"
            />
            <h3>Curtis Tran</h3>
            <div className={styles.topTrainerButton}>
              <button className={styles.primary}>Follow</button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h4>Top Skills</h4>
              <ul>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
          <div className={styles.topTrainerCardContainer}>
            <img
              className={styles.round}
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"
              alt="user"
              width="90px"
            />
            <h3>Curtis Tran</h3>
            <div className={styles.topTrainerButton}>
              <button className={styles.primary}>Follow</button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h4>Top Skills</h4>
              <ul>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
          <div className={styles.topTrainerCardContainer}>
            <img
              className={styles.round}
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"
              alt="user"
              width="90px"
            />
            <h3>Curtis Tran</h3>
            <div className={styles.topTrainerButton}>
              <button className={styles.primary}>Follow</button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h4>Top Skills</h4>
              <ul>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
