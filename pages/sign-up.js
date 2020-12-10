import React, { Component } from 'react'
import SignUpPage from '../components/SignUpPage.js/SignUpPage'
import styles from '../styles/Home.module.css'

function signUp() {
    return  (
      <div className={styles.loginContainer}>
        <SignUpPage />
      </div>
    )
}

export default signUp;
