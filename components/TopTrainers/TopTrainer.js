import React, { Component } from "react";
import styles from "./TopTrainer.module.css";
import Carousel from "react-elastic-carousel";

function TopTrainer() {
  // console.log(users);
    const breakPoints = [
      { width: 200, itemsToShow: 1 },
      { width: 240, itemsToShow: 2 },
      { width: 400, itemsToShow: 3 },
    ];
    return (
      <div className={styles.topTrainerCard}>
        <Carousel
          className={styles.topTrainerHeader}
          breakPoints={breakPoints}
          showArrows={false}
          enableAutoPlay={true}
          pagination={true}
        >
          <div className={styles.topTrainerCardContainer}>
            <img
              className={styles.round}
              src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
              alt="user"
              width="90px"
            />
            <h3>Quan</h3>
            <div className={styles.topTrainerButton}>
              <button className={styles.primary}>
                Follow
              </button>
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
        </Carousel>
      </div>
    );
}

export default TopTrainer;
