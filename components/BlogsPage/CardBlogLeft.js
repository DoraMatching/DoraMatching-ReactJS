import React, { Component } from 'react'
import PostPage from '../CardPosts/PostPage';
import styles from "./CardBlogPage.module.scss";
import CreateBlog from './CreateBlog';

function CardBlogLeft({posts}) {
    return (
      <div className={styles.cardBlogsLeft}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
        <h3>All Blogs</h3>
        <CreateBlog />
        </div>
        <div className={styles.cardBlogLeftMap}>
            {posts.map((post, id) => {
              return <PostPage post={post} key={id} />;
            })}
        </div>
      </div>
    );
}

export default CardBlogLeft;
