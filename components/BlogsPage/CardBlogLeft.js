import React, { Component } from 'react'
import PostPage from '../CardPosts/PostPage';
import styles from "./CardBlogPage.module.scss";

function CardBlogLeft({posts}) {
    return (
      <div className={styles.cardBlogsLeft}>
        <h3>All Blogs</h3>
        <div className={styles.cardBlogLeftMap}>
            {posts.map((post, id) => {
              return <PostPage post={post} key={id} />;
            })}
        </div>
      </div>
    );
}

export default CardBlogLeft;
