import React, { Component } from 'react'
import styles from "./CardBlogPage.module.scss";
import CreateBlog from './CreateBlog';

export default class CardBlogRight extends Component {
  render() {
    return (
      <div className={styles.cardBlogRight}>
          <h3>Related Blogs</h3>
      </div>
    );
  }
}
