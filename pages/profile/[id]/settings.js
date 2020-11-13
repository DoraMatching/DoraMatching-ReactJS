import axios from 'axios';
import React from 'react';
import ProfileSettingPage from '../../../containers/ProfileSettingPage';
import styles from '../../../styles/Home.module.css'

function settings({userAcc}) {
  return (
    <div className={styles.loginContainer}>
      <ProfileSettingPage userAcc={userAcc} />
    </div>
  );
}
settings.getInitialProps = async ({ query: { id } }) => {
  const [userAcc] = await Promise.all([
    axios.get(`https://api.dev.doramatching.tk/user/${id}`)
  ]);
  return {
    userAcc: userAcc.data,
  };
};

export default settings;