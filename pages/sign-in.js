import React, { Component } from 'react'
import LoginPage from '../components/LoginPage/LoginPage'
import styles from '../styles/Home.module.css'
import axios from "axios";

function signIn() {
    return (
      <div className={styles.loginContainer}>
        <LoginPage />
      </div>
    );
}


export default signIn;