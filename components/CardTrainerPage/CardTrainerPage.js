import React from 'react';
import styles from "./CardTrainerPage.module.css";

function CardTrainerPage({user}) {
  return (
      <div className={styles.topTrainerCardContainer}>
        <img
          className={styles.round}
          src={user.avatarUrl}
          alt="user"
          width="90px"
        />
        <h3>{user.name}</h3>
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
  );
}

export default CardTrainerPage;