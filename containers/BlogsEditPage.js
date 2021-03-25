import React, { Component } from 'react';
import styles from '../styles/Home.module.css';
import EditBlog from '../components/BlogsModule/BlogsPage/EditBlog';
import CardBlogRight from '../components/BlogsModule/BlogsPage/CardBlogRight';

class BlogsPage extends Component {
    render() {
        return (
            <div className={styles.blogsPage}>
                <div style={{ width: '70%' }}>
                    <EditBlog {...this.props} />
                </div>
                <div style={{ width: '20%', marginLeft: '20px' }}>
                    <CardBlogRight />
                </div>
            </div>
        );
    }
}

export default BlogsPage;
