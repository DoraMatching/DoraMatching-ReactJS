import React, { Component } from 'react'
import CardBlogsLeft from '../components/BlogsPage/CardBlogLeft';
import CardBlogsRight from '../components/BlogsPage/CardBlogRight';
import styles from '../styles/Home.module.css'


class BlogsPage extends Component {
  render() {
    return (
      <div className={styles.blogsPage}>
        <div style={{ width: "70%" }}>
          <CardBlogsLeft {...this.props} />
        </div>
        <div style={{ width: "20%", marginLeft: "20px" }}>
          <CardBlogsRight />
        </div>
      </div>
    );
  }
}

export default BlogsPage;