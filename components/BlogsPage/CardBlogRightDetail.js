import Link from 'next/link';
import React from 'react'
import styles from "./CardBlogPage.module.scss";

export default function CardBlogRightDetail({post}) {
    return (
      <div className={styles.cardBlogRightDetail}>
        <div className={styles.ourTeam}>
          <div className={styles.picture}>
            <img className="img-fluid" src={post.author.avatarUrl} />
          </div>
          <div className={styles.teamContent}>
            <h3 className={styles.name}>{post.author.name}</h3>
            <h4 className={styles.title}>Web Developer</h4>
          </div>
          <ul className={styles.social}>
            <button className={styles.button}><Link href={`/profile/${post.author.id}`}><a>View Profile</a></Link> </button>
          </ul>
          <div className={styles.countBlog}>
            <p>4 blogs</p>
          </div>
        </div>
      </div>
    );
}
