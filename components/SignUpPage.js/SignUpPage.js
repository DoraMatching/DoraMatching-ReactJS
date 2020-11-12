import React, { useState } from "react";
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import Link from "next/link";
import styles from "./SignUpPage.module.css";
import LoginGithub from "../LoginPage/LoginGithub";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from 'js-cookie';

function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, errors } = useForm();

  function onSubmit() {
    axios("https://api.dev.doramatching.tk/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        username,
        password,
      },
    })
      .then((data) => {
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
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
            <label>Phone number</label>
            <input name="phonenumber" type="text" />
          </FormField>
          <FormField>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              ref={register({
                required: true,
                minLength: 8,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              })}
            />
            {_.get("password.type", errors) === "required" && (
              <p>This field is required</p>
            )}
            {_.get("password.type", errors) === "minLength" && (
              <p>Password (8 characters minimum)</p>
            )}
            {_.get("password.type", errors) === "pattern" && (
              <p>Password must container following "A lowercase/uppercase - a special character - a number" </p>
            )}
          </FormField>
          <FormField>
            <Checkbox label="Confirm Password" />
          </FormField>
          <div className={styles.loginButton}>
            <Button
              type="submit"
              color={"linkedin"}
              disabled={!email || !username || !password}
            >
              SIGN UP
            </Button>
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
