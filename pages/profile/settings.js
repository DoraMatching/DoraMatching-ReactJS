import React from 'react';
import ProfileSettingPage from '../../containers/ProfileSettingPage';
import styles from '../../styles/Home.module.css'

function settings(props) {
  return (
    <div className={styles.loginContainer}>
      <ProfileSettingPage />
    </div>
  );
}



export default settings;