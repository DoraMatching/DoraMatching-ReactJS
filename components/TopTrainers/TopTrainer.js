import React, { Component } from "react";
import styles from "./TopTrainer.module.css";
import Carousel from 'react-elastic-carousel';

class TopTrainer extends Component {
  render() {
    const breakPoints = [
      {width: 200, itemsToShow: 1},
      {width: 240, itemsToShow: 2},
      {width: 400, itemsToShow: 3},
    ];
    return (
      <div className={styles.topTrainerCard}>
        <Carousel className={styles.topTrainerHeader} breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} pagination={false} >
          <div className={styles.topTrainerCardContainer}>
            <img
              className={styles.round}
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="user"
              width="90px"
            />
            <h3>Raymond Le</h3>
            <div className={styles.topTrainerButton}>
              <button className={`${styles.primary} ${styles.ghost}`}>
                Follow
              </button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h6>Top Skills</h6>
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
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="user"
              width="90px"
            />
            <h3>Raymond Le</h3>
            <div className={styles.topTrainerButton}>
              <button className={`${styles.primary} ${styles.ghost}`}>
                Follow
              </button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h6>Top Skills</h6>
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
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="user"
              width="90px"
            />
            <h3>Raymond Le</h3>
            <div className={styles.topTrainerButton}>
              <button className={`${styles.primary} ${styles.ghost}`}>
                Follow
              </button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h6>Top Skills</h6>
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
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="user"
              width="90px"
            />
            <h3>Raymond Le</h3>
            <div className={styles.topTrainerButton}>
              <button className={`${styles.primary} ${styles.ghost}`}>
                Follow
              </button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h6>Top Skills</h6>
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
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="user"
              width="90px"
            />
            <h3>Raymond Le</h3>
            <div className={styles.topTrainerButton}>
              <button className={`${styles.primary} ${styles.ghost}`}>
                Follow
              </button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h6>Top Skills</h6>
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
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="user"
              width="90px"
            />
            <h3>Raymond Le</h3>
            <div className={styles.topTrainerButton}>
              <button className={`${styles.primary} ${styles.ghost}`}>
                Follow
              </button>
            </div>
            <div className={styles.topTrainerSkills}>
              <h6>Top Skills</h6>
              <ul>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default TopTrainer;
