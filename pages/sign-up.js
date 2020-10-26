import React, { Component } from 'react'
import SignUpPage from '../components/SignUpPage.js/SignUpPage'
import styles from '../styles/Home.module.css'

export default class signUp extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <SignUpPage />
      </div>
    )
  }
}
