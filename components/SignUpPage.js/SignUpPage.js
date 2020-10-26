import React, { Component } from 'react';
import { Button, Form, FormField } from 'semantic-ui-react';
import Link from 'next/link'
import styles from './SignUpPage.module.css'

class SignUpPage extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginLeft}>
          <img src="/static/worker.png" alt="worker" />
        </div>
        <div className={styles.loginRight}>
          <h2 style={{ textAlign: "center" }}>REGISTER</h2>
          <Form>
            <FormField>
              <label>Email</label>
              <input type="text" />
            </FormField>
            <FormField>
              <label>Username</label>
              <input type="text" />
            </FormField>
            <FormField>
              <label>Phone number</label>
              <input type="text" />
            </FormField>
            <FormField>
              <label>Password</label>
              <input type="password" />
            </FormField>
            <FormField>
              <label>Password</label>
              <input type="password" />
            </FormField>
          </Form>
          <div className={styles.loginButton}>
            <Button color={"linkedin"}>SIGN UP</Button>
            <Button color={"black"}>
              <div className={styles.loginButtonSecond}>
                <i className="fab fa-github"></i>
                <p style={{ marginLeft: "10px" }}>Login with Github</p>
              </div>
            </Button>
          </div>
          <div className={styles.notRegis}>
            <p className={styles.notRegisP}>Already have an account?</p>
            <Link href="/sign-in">
              <a>Sign in</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;