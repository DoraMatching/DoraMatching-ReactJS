import React from 'react';
import BlogsPageDetail from '../../../containers/BlogsPageDetail';
import styles from "../../../styles/Home.module.css";
import axios from 'axios';

function blog({ post, tagPosts, comments }) {
  return (
    <div className={styles.container}>
      <BlogsPageDetail post={post} tagPosts={tagPosts} comments={comments} />
    </div>
  );
}

blog.getInitialProps = async ({ query: { id } }) => {
  const [post, tagPosts] = await Promise.all([
    axios.get(`https://api.dev.doramatching.tk/post/${id}`),
    axios.get("https://api.dev.doramatching.tk/tag-post"),
  ]);
  return {
    post: post.data,
    tagPosts: tagPosts.data.items,
    comments: post.data.comments
  };
};

export default blog;