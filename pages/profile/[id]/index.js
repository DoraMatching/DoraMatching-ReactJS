import axios from 'axios';
import React from 'react';
import ProfilePage from '../../../containers/ProfilePage';
import styles from '../../../styles/Home.module.css'

function profile({userAcc}) {
  
  return (
    <div className={styles.loginContainer}>
      <ProfilePage userAcc={userAcc} />
    </div>
  );
}

profile.getInitialProps = async ({ query: { id } }) => {
  const [userAcc] = await Promise.all([
    axios.get(`https://api.dev.doramatching.tk/user/${id}`)
  ]);
  return {
    userAcc: userAcc.data,
  };
};



export default profile;