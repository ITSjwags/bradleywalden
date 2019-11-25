import React, { Component } from 'react'
// images
import IconMail from '-!svg-react-loader?name=Mail!../images/icon-mail.svg'

export default class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <p>
          Singer, songwriter, performer and front man for the band Emarosa.
          Welcome to my corner of the internet, I’m working on it.
        </p>

        <a className="link link--colored" href="mailto:info@bradleywalden.com">
          <div className="icon icon--colored">
            <IconMail />
          </div>
          <span>info@bradleywalden.com</span>
        </a>
      </div>
    )
  }
}
