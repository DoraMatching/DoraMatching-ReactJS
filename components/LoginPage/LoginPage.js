import React, {useState } from "react";
import {useRouter} from 'next/router';
import { Button, Form, FormField } from "semantic-ui-react";
import styles from "./LoginPage.module.css";
import Link from "next/link";
import axios from "axios";
import cookie from 'js-cookie';
import LoginGithub from "./LoginGithub";



function LoginPage() {
  const router = useRouter();

  const [loginError, setLoginError ] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    axios("https://api.dev.doramatching.tk/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password,
      },
    })
      .then((data) => {
        console.log("L36", data);
          cookie.set("token", data.token); //{expires: 2}
          router.push("/");
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginRight}>
        <h2 style={{ textAlign: "center" }}>SIGN IN</h2>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Email or Username</label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <div className={styles.loginButton}>
          <Button type='submit' color={"linkedin"}>LOGIN</Button>
          <LoginGithub />
        </div>
        </Form>
        <div className={styles.notRegis}>
          <p className={styles.notRegisP}>Not registered yet?</p>
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </div>
        {loginError && <p style={{color: 'red'}}>{loginError}</p>}
      </div>
      <div className={styles.loginLeft}>
        <img src="/static/worker.png" alt="worker" />
      </div>
    </div>
  );
}

export default LoginPage;
