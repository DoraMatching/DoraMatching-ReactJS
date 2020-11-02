import axios from 'axios';
import React from 'react'
import TrainerPage from '../containers/TrainerPage';
import styles from '../styles/Home.module.css'

function trainers({users}) {
  console.log('L8', users);
    return (
      <div className={styles.container}>
        <TrainerPage users={users} />
      </div>
    );
}

trainers.getInitialProps = async () => {
  const {data} = await axios.get('https://api.dev.doramatching.tk/users');
  return { users: data.items };
}

export default trainers;
