import React from "react";
import styles from "./CardBlogPage.module.scss";
import PostPage from "../CardPosts/PostPage";

function CardTagBlogDetail({ tagItem }) {
  const posts = tagItem[0].posts;

  return (
    <div className={styles.cardBlogLeft}>
      <h3>Tag: {tagItem[0].name} </h3>
      {posts &&
        posts.map((post, id) => {
          return <PostPage post={post} key={id} />;
        })}
    </div>
  );
}

export default CardTagBlogDetail;
