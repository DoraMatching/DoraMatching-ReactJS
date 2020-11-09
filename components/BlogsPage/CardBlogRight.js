import React, { Component } from 'react'
import styles from "./CardBlogPage.module.css";

export default class CardBlogRight extends Component {
  render() {
    return (
      <div className={styles.cardBlogRight}>
        <div>
          <button className={styles.tagBlog}>tags</button>
        </div>
      </div>
    );
  }
}
