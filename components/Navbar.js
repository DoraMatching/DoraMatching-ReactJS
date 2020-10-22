import React, { useState } from 'react';
import Link from 'next/link';
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "./Button";
import { Search } from 'semantic-ui-react';


function Navbar() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <nav className="NavbarItems">
        <img
          className="navbarLogo"
          src="/static/logo.png"
          alt="logo"
          width="40px"
          height="40px"
        />
        <div className="menuIcon" onClick={handleClick}>
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="navSearch">
          <Search
            placeholder="Search trainer, question, blog"
            size="mini"
            className="searchBar"
          />
        </div>
        <ul className={clicked ? "navMenu active" : "navMenu"}>
          <li>
            <Link href="/">
              <a className="navLinks">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navLinks">Trainers</a>
            </Link>
          </li>
          <li>
            <Link href="/questions">
              <a className="navLinks">Questions</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navLinks">Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navLinksMobile">Login</a>
            </Link>
          </li>
        </ul>
        <Button>Login</Button>
      </nav>
    </>
  );
}
export default Navbar;
