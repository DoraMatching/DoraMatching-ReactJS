import React, { Component } from 'react';
import { Button, Form, FormField } from 'semantic-ui-react';
import styles from './LoginPage.module.css'
import Link from 'next/link'
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

const API_URL = 'https://api.dev.doramatching.tk';

const firebaseConfig = {
  apiKey: "AIzaSyCMry94rbb_fD9tUpxlab7Bpuf_uqBWxWY",
  authDomain: "doramatching.firebaseapp.com",
  databaseURL: "https://doramatching.firebaseio.com",
  projectId: "doramatching",
  storageBucket: "doramatching.appspot.com",
  messagingSenderId: "1074902429461",
  appId: "1:1074902429461:web:bf78c961dd39da9370c31c",
  measurementId: "G-DSE4Q6V3H8"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

let provider = new firebase.auth.GithubAuthProvider().addScope("user,repo");

class LoginPage extends Component {
  state ={
    name: ''
  }
  loginWithGithub = async () => {
    try {
      const { credential, user } = await firebase.auth().signInWithPopup(provider);
      const { accessToken } = credential;
      console.log('RESULT', { user, accessToken });

      const { data } = await axios.post(`${API_URL}/github`, { user, accessToken });

      console.log('RESPONSE FROM API', data);

    } catch ({ code, message, email, credential }) {
      console.error({ code, message, email, credential });
    };
  }
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginLeft}>
          <img src="/static/worker.png" alt="worker" />
        </div>
        <div className={styles.loginRight}>
          <h2 style={{ textAlign: "center" }}>SIGN IN</h2>
          <Form>
            <FormField>
              <label>Email or Username</label>
              <input type="text" />
            </FormField>
            <FormField>
              <label>Password</label>
              <input type="password" />
            </FormField>
          </Form>
          <div className={styles.loginButton}>
            <Button color={"linkedin"}>LOGIN</Button>
            <Button color={"black"} onClick={this.loginWithGithub}>
              <div className={styles.loginButtonSecond}>
                <i className="fab fa-github"></i>
                <p style={{ marginLeft: "10px" }}>Login with Github</p>
              </div>
            </Button>
          </div>
          <div className={styles.notRegis}>
            <p className={styles.notRegisP}>Not registered yet?</p>
            <Link href="/sign-up">
              <a>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;