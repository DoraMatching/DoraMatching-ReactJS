import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from "./Button";
import { Search } from 'semantic-ui-react';

// const Circle = ({clicked, onClick}) => {
//   return (
//     <div onClick={onClick}>
//       <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
//     </div>
//   )
// }

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({ clicked: !state.clicked }))
  }

  render() {
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
          <div className="menuIcon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            {/* <Circle clicked={this.state.clicked} onClick={this.onClick} /> */}
          </div>
          <div className="navSearch"><Search /></div>
          <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
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
              <Link href="/">
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
}
export default Navbar;
