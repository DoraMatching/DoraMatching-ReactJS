import axios from 'axios';
import React from 'react'
import TopicsPage from '../containers/TopicsPage';
import styles from '../styles/Home.module.css'

function topics({topics}) {
  return (
    <div className={styles.container}>
      <TopicsPage topics={topics} />
    </div>
  )
}

topics.getInitialProps = async () => {
  const [topics, users] = await Promise.all([
    axios.get("https://api.dev.doramatching.tk/topics"),
  ]);
  return {
    topics: topics.data.items,
  };
};

export default topics;
