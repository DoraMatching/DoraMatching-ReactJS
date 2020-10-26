import React from 'react'
import BlogsPage from '../containers/BlogsPage';
import styles from "../styles/Home.module.css";
import axios from 'axios';

function blogs({posts}) {
    return (
      <div className={styles.container}>
        <BlogsPage posts={posts} />
      </div>
    )
}

blogs.getInitialProps = async () => {
  const {data} = await axios.get('https://api.dev.doramatching.tk/posts')
  return {posts: data.items}
}

export default blogs;