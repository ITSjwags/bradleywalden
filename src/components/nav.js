import React from 'react'
import Link from 'gatsby-link'
// images
import IconInstagram from '-!svg-react-loader!../images/instagram.svg'
import IconTwitter from '-!svg-react-loader!../images/twitter.svg'

const Nav = () => (
  <nav className="nav">
    <Link className="logo" to="/">
      BW
    </Link>

    <div className="socials">
      <a href="https://twitter.com/bradleywalden" target="_blank">
        <IconTwitter className="twitter" />
      </a>
      <a href="https://instagram.com/bradleyscott" target="_blank">
        <IconInstagram className="instagram" />
      </a>
    </div>
  </nav>
)

export default Nav
