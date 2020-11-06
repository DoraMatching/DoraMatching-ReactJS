import React, { Component } from 'react'
import styles from "./CardBlogPage.module.css";

export default function CardBlogRightDetail({post}) {
    return (
      <div className={styles.cardBlogRight}>
        <div className={styles.cardBlogRightDetailCover}>
          <div className={styles.cardBlogRightDetailAuthor}>
            <div className={styles.cardBlogRightDetailAvatar}>
              <img src={post.author.avatarUrl} alt=""/>
            </div>
            <h4>{post.author.name}</h4>
            <p>Hi! I`m an authtor of this blog. Read our post - be in trend!</p>
          </div>
        </div>
        <div>
          <button className={styles.tagBlog}>tags</button>
        </div>
      </div>
    );
}
