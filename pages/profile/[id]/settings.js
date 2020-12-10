import React from 'react';
import ProfileSettingPage from '../../../containers/ProfileSettingPage';
import Client from '../../../services/Client';
import styles from '../../../styles/Home.module.css'

function settings({userAcc}) {
  return (
    <div className={styles.loginContainer}>
      <ProfileSettingPage userAcc={userAcc} />
    </div>
  );
}
settings.getInitialProps = async ({ query: { id } }) => {
  const {data} = await Client(`user/${id}`)
  return {
    userAcc: data,
  };
};

export default settings;