import React from 'react'
import BlogsPage from '../../containers/BlogsPage'
import styles from "../../styles/Home.module.css";
import axios from 'axios';
import Client from '../../services/Client';

function blogs({posts}) {
    return (
      <div className={styles.container}>
        <BlogsPage posts={posts} />
      </div>
    )
}

blogs.getInitialProps = async () => {
  const {data} = await Client('posts')
  return {posts: data.items}
}

export default blogs;