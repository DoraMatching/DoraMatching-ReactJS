import React, { Component } from 'react'
import LoginPage from '../components/LoginPage/LoginPage'
import styles from '../styles/Home.module.css'

export default class signIn extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <LoginPage />
      </div>
    );
  }
}
