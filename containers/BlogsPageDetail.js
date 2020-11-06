import React, { Component } from 'react'
import CardBlogLeftDetail from '../components/BlogsPage/CardBlogLeftDetail';
import CardBlogRightDetail from '../components/BlogsPage/CardBlogRightDetail';
import styles from '../styles/Home.module.css'


class BlogsPageDetail extends Component {
  render() {
    return (
      <div className={styles.blogsPage}>
        <div style={{ width: "70%" }}>
          <CardBlogLeftDetail {...this.props} />
        </div>
        <div style={{ width: "20%", marginLeft: "20px" }}>
          <CardBlogRightDetail {...this.props} />
        </div>
      </div>
    );
  }
}

export default BlogsPageDetail;