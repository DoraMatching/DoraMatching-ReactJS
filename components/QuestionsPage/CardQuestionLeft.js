import React, { Component } from 'react'
import Link from 'next/link';
import styles from './CardQuestionPage.module.css'
class CardQuestionLeft extends Component {
  render() {
    return (
      <div className={styles.cardQuestionLeft}>
        <div>
          <button className={styles.askQuestion}>+ Ask a question</button>
        </div>
        <div className={styles.cardQuestionTag}>
          <i className="fa fa-tag"></i>
          <span>Tag</span>
        </div>
        <div className={styles.cardQuestionTagDetail}>
          <li><button><Link href="/"> web</Link></button></li>
          <li><button><Link href="/"> technology</Link></button></li>
          <li><button><Link href="/"> ReactJs</Link></button></li>
        </div>
        <p>
          <Link href="/"> See more tags </Link>
        </p>
      </div>
    );
  }
}
export default CardQuestionLeft;