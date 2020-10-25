import React, { Component } from 'react'
import Post from '../CardPosts/Post';
import styles from "./CardBlogPage.module.css";

function CardBlogLeft({posts}) {
    return (
      <div className={styles.cardBlogsLeft}>
        <h3>All Blogs</h3>
        <div className={styles.cardBlogLeftDetail}>
            {posts.map((post, id) => {
              return <Post post={post} key={id} />;
            })}
        </div>
      </div>
    );
}

export default CardBlogLeft;
