import React, { Component } from 'react'
import CardBlogLeft from '../components/BlogsPage/CardBlogLeft';
import CardBlogRight from '../components/BlogsPage/CardBlogRight';
import styles from '../styles/Home.module.css'


class BlogsPage extends Component {
  render() {
    return (
      <div className={styles.blogsPage}>
        <div style={{ width: "65%" }}>
          <CardBlogLeft {...this.props} />
        </div>
        <div style={{ width: "35%", marginLeft: "20px" }}>
          <CardBlogRight />
        </div>
      </div>
    );
  }
}

export default BlogsPage;