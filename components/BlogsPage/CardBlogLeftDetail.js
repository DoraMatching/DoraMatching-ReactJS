import Link from 'next/link';
import React, { Component } from 'react'
import PostDetail from '../CardPosts/PostDetail';
import styles from "./CardBlogPage.module.css";

function CardBlogLeftDetail({post}) {
    return (
      <div className={styles.cardBlogsLeftDetail}>
        <div className={styles.cardBlogLeftHeader}>
        <p>
          <Link href="/posts">
            <a>
              <i className="fas fa-angle-double-left"></i>
              <span>All Post</span>
            </a>
          </Link>
        </p>
      </div>
        <PostDetail post={post} />
      </div>
    );
}

export default CardBlogLeftDetail;
