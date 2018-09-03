import React from 'react';
import Link from 'gatsby-link';
// images
import IconInstagram from '-!svg-react-loader?name=Instagram!../images/instagram.svg';
import IconTwitter from '-!svg-react-loader?name=Twitter!../images/twitter.svg';

const Nav = () => (
  <nav className="nav">
    <Link
      className="logo"
      to="/"
    >
      BW
    </Link>

    <div className="socials">
      <a href="https://twitter.com/bradleywalden" target="_blank">
        <IconTwitter />
      </a>
      <a href="https://instagram.com/bradley.walden" target="_blank">
        <IconInstagram />
      </a>
    </div>
  </nav>
)

export default Nav;
