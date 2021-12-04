import React from 'react'
import Link from 'gatsby-link'
// images
import IconInstagram from '-!svg-react-loader!../images/instagram.svg'
import IconTwitter from '-!svg-react-loader!../images/twitter.svg'
import IconMail from '-!svg-react-loader?name=Mail!../images/icon-mail.svg'

const Nav = () => (
  <nav className="nav">
    <Link className="logo" to="/">
      Badley
    </Link>

    <div className="socials">
      <a href="https://twitter.com/badleyofficial" target="_blank">
        <IconTwitter className="twitter" />
      </a>
      <a href="https://instagram.com/bradleyscott" target="_blank">
        <IconInstagram className="instagram" />
      </a>
      <a href="mailto:info@bradleywalden.com">
        <IconMail className="mail" />
      </a>
    </div>
  </nav>
)

export default Nav
