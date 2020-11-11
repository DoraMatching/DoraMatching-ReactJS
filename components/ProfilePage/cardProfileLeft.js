import Link from 'next/link';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import Class from '../CardClasses/Class';
import styles from './CardProfile.module.scss';

function CardProfileLeft(props) {
  return (
    <div>
      <div className={styles.cardProfileLeftWrapper}>
        <Link href="/profile/settings">
          <a>
            <div class={styles.topIcons}>
              <Popup
                trigger={<i class="fas fa-cogs"></i>}
                content="Setting profile"
                basic
              />
            </div>
          </a>
        </Link>

        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
            className={styles.thumbnail}
          />
          <h3 className={styles.name}>
            <Link href="/profile">
              <a>Beverly Little</a>
            </Link>{" "}
          </h3>
          <p className={styles.title}>Javascript Developer</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <h4>12</h4>
            <p>Blogs</p>
          </div>
          <div className={styles.icon}>
            <h4>12</h4>
            <p>Classes</p>
          </div>
          <div className={styles.icon}>
            <h4>12</h4>
            <p>Questions</p>
          </div>
        </div>
      </div>

      <div className={styles.cardProfileLeftUnder}>
        <Class />
      </div>
    </div>
  );
}

export default CardProfileLeft;