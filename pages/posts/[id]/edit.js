import React from "react";
import styles from "../../../styles/Home.module.css";
import axios from "axios";
import BlogsEditPage from "../../../containers/BlogsEditPage";

function editBlog({ post, tagPosts }) {
  return (
    <div className={styles.container}>
      <BlogsEditPage post={post} tagPosts={tagPosts} />
    </div>
  );
}

editBlog.getInitialProps = async ({ query: { id } }) => {
  const [post, tagPosts] = await Promise.all([
    axios.get(`https://api.dev.doramatching.tk/post/${id}`),
    axios.get("https://api.dev.doramatching.tk/tag-post"),
  ]);
  return {
    post: post.data,
    tagPosts: tagPosts.data.items,
  };
};

export default editBlog;
