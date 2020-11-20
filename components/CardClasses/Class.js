import Link from "next/link";
import React, { Component } from "react";
import styles from "./Class.module.scss";

class Class extends Component {
  render() {
    return (
      // <div className={styles.classCard}>
      //   <div className={styles.classHeader}>
      //     <div className={styles.classThumb}>
      //       <h2>30</h2>
      //       <span>hours</span>
      //     </div>
      //     <div className={styles.classTitle}>
      //       <h5><Link href='lesson'><a>Fully Responsive Web Design & Development.</a></Link></h5>
      //       <span className={styles.classAuthor}>
      //         <p>Web</p>
      //         <span>Christian Tran</span>
      //       </span>
      //     </div>
      //   </div>
      //   <div className={styles.classMeta}>
      //     <div className={styles.classMetaTrain}>
      //       <i className="fas fa-graduation-cap"></i>
      //       <p>30 trainees</p>
      //     </div>
      //     <i className="far fa-heart"></i>
      //     <button>Join now</button>
      //   </div>
      // </div>
      <div
        id="post-1011"
        class="post-1011 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-photo course_tag-languages course_tag-science course_tag-technology course"
        // style="position: absolute; left: 0%; top: 634px;"
      >
        <div class="course__content-wrapper">
          <a
            href="http://iguru.wgl-demo.net/course/photography-techniques-light-content-sharing/"
            class="course-permalink"
          >
            <div class="course-thumbnail">
              <img
                src="http://iguru.wgl-demo.net/wp-content/uploads/2019/07/courses_02-435x580.jpg"
                srcset="http://iguru.wgl-demo.net/wp-content/uploads/2019/07/courses_02-435x580.jpg 435w,http://iguru.wgl-demo.net/wp-content/uploads/2019/07/courses_02-600x800.jpg 600w"
                sizes="(min-width: 600px) 600px, 435px"
                alt="Photography Techniques: Light, Content &amp; Sharing"
              />
            </div>
          </a>

          <span class="cat-links">
            <a
              href="http://iguru.wgl-demo.net/course-category/photo/"
              rel="tag"
            >
              Photo
            </a>
          </span>

          <div class="course-content">
            <div class="course-info">
              <a
                href="http://iguru.wgl-demo.net/profile/user1/"
                class="course-instructor__img"
              >
                <img
                  alt="Admin bar avatar"
                  src="http://iguru.wgl-demo.net/wp-content/uploads/learn-press-profile/3/6e7c39d97dd6c1c56b7ab9520c2edfa0.jpg"
                  class="avatar avatar-96 photo"
                  height="96"
                  width="96"
                />
              </a>
              <span class="course-instructor">
                <a href="http://iguru.wgl-demo.net/profile/user1/">
                  Joss Whedon
                </a>
              </span>
              <a
                href="http://iguru.wgl-demo.net/course/photography-techniques-light-content-sharing/"
                class="course-title-wrapper"
              >
                <h3 class="course-title" 
                // style="margin-bottom: 20px;"
                >
                  Photography Techniques: Light, Content &amp; Sharing
                </h3>
              </a>
            </div>
            <div class="course-divider"></div>
            <div class="course-meta grid">
              <span class="course-students" title="6 students enrolled">
                6
              </span>
              <span class="course-reviews" title=" No any reviews yet">
                0
              </span>
              <div class="lp-course-buttons">
                <form
                  name="purchase-course"
                  class="purchase-course"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <input type="hidden" name="purchase-course" value="1011" />
                  <input
                    type="hidden"
                    name="purchase-course-nonce"
                    value="d92b21bb4f"
                  />
                  <button
                    class="lp-button button button-purchase-course"
                    title="Buy this course"
                  >
                    <span class="course-price">
                      <span class="price">$300</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Class;
