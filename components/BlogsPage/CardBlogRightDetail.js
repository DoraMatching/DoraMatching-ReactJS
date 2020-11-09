import React from 'react'
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
            <p>4 blogs</p>
          </div>
        </div>
        <div>
          <button className={styles.tagBlog}>tags</button>
        </div>
      </div>
    );
}
