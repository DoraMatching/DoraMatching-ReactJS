import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import Link from "next/link";
import styles from "./SignUpPage.module.css";
import LoginGithub from "../LoginPage/LoginGithub";
import axios from "axios";
import { useRouter } from "next/router";

function SignUpPage() {
  const router = useRouter();

  const [signupError, setSignupError] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    axios("https://api.dev.doramatching.tk/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        username,
        avatarUrl,
        password
      },
    })
      .then((data) => {
        console.log("L28", data);
          cookie.set("token", data.token); //{expires: 2}
          router.push("/");
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <img src="/static/worker.png" alt="worker" />
      </div>
      <div className={styles.loginRight}>
        <h2 style={{ textAlign: "center" }}>REGISTER</h2>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
            />
          </FormField>
          <FormField>
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
            />
          </FormField>
          <FormField>
            <label>Avatar</label>
            <input
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              name="avatarUrl"
              type="text"
            />
          </FormField>
          <FormField>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
            />
          </FormField>
          <FormField>
            <Checkbox label="Confirm Password" />
          </FormField>
          <div className={styles.loginButton}>
            <Button color={"linkedin"}>SIGN UP</Button>
            {signupError && <p style={{ color: "red" }}>{signupError}</p>}
            <LoginGithub />
          </div>
        </Form>
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

export default SignUpPage;
