import React, { Component } from 'react'
import styles from "./CardBlogPage.module.css";
import CreateBlog from './CreateBlog';

export default class CardBlogRight extends Component {
  render() {
    return (
      <div className={styles.cardBlogRight}>
        <div>
          <CreateBlog />
        </div>
      </div>
    );
  }
}
