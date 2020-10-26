import axios from 'axios';
import React from 'react'
import TopTrainer from '../components/TopTrainers/TopTrainer';
import styles from '../styles/Home.module.css'

function trainers() {
    return (
      <div className={styles.container}>
        <TopTrainer />
      </div>
    );
}

// trainers.getInitialProps = async () => {
//   const {data} = await axios.get('https://api.dev.doramatching.tk/users');
//   return { users: data.items };
// }

export default trainers;
