import React from "react";
import styles from "../../../styles/Home.module.css";
import axios from "axios";
import BlogsEditPage from "../../../containers/BlogsEditPage";
import Client from "../../../services/Client";

function editBlog({ post, tagPosts }) {
  return (
    <div className={styles.container}>
      <BlogsEditPage post={post} tagPosts={tagPosts} />
    </div>
  );
}

editBlog.getInitialProps = async ({ query: { id } }) => {
  const [post, tagPosts] = await Promise.all([
    Client(`post/${id}`),
    Client("tag-post"),
  ]);
  return {
    post: post.data,
    tagPosts: tagPosts.data.items,
  };
};

export default editBlog;
