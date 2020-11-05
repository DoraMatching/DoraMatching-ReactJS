import React, { Component } from 'react'
import CardBlogLeftDetail from '../components/BlogsPage/CardBlogLeftDetail';
import CardBlogRight from '../components/BlogsPage/CardBlogRight';
import styles from '../styles/Home.module.css'


class BlogsPageDetail extends Component {
  render() {
    return (
      <div className={styles.blogsPage}>
        <div style={{ width: "70%" }}>
          <CardBlogLeftDetail {...this.props} />
        </div>
        <div style={{ width: "20%", marginLeft: "20px" }}>
          <CardBlogRight />
        </div>
      </div>
    );
  }
}

export default BlogsPageDetail;