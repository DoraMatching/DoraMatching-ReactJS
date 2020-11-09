import React from 'react';
import ProfilePage from '../containers/ProfilePage';
import styles from '../styles/Home.module.css'

function profile(props) {
  return (
    <div className={styles.loginContainer}>
      <ProfilePage />
    </div>
  );
}

export default profile;