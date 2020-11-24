import _ from "lodash/fp";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormField, Message } from "semantic-ui-react";
import { useAuth } from "../../contexts/auth";
import LoginGithub from "../LoginPage/LoginGithub";
import styles from "./SignUpPage.module.css";

function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { signUp, logout } = useAuth();

  const { register, handleSubmit, errors, watch } = useForm();

  async function onSubmit(e) {
    try {
      await signUp(email, username, password);
      router.push(router.query["forward"] || "/");
    } catch (e) {
      setError(true);
      console.error(e);
      router.push("/sign-up");
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <img src="/static/worker.png" alt="worker" />
      </div>
      <div className={styles.loginRight}>
        <h2 style={{ textAlign: "center" }}>REGISTER</h2>
        <Form error={true} onSubmit={handleSubmit(onSubmit)}>
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
              ref={register({
                required: true,
              })}
            />
          </FormField>
          {/* <FormField>
            <label>Phone number</label>
            <input name="phonenumber" type="text" />
          </FormField> */}
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
              <p>
                Password must container following "A lowercase/uppercase - a
                special character - a number"{" "}
              </p>
            )}
          </FormField>
          <FormField>
            <label>Confirm Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="confirmPass"
              type="password"
              ref={register({
                required: true,
                validate: (value) => {
                  return value === watch("password") || "Password does not match"
                },
              })}
            />
          </FormField>
          {error && (
            <Message
              negative
              error
              content="Email or username already exists"
            />
          )}
          <div className={styles.loginButton}>
            <Button type="submit" color={"linkedin"}>
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
