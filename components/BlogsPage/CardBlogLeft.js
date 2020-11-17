import React, { Component } from 'react'
import Post from '../CardPosts/Post';
import styles from "./CardBlogPage.module.scss";

function CardBlogLeft({posts}) {
    return (
      <div className={styles.cardBlogsLeft}>
        <h3>All Blogs</h3>
        <div className={styles.cardBlogLeftMap}>
            {posts.map((post, id) => {
              return <Post post={post} key={id} />;
            })}
        </div>
      </div>
    );
}

export default CardBlogLeft;
