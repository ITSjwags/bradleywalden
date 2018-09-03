import React, { Component } from 'react';
// images
import IconMail from '-!svg-react-loader?name=Mail!../images/icon-mail.svg';

export default class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum accumsan dolor sed consequat. Nullam euismod lectus sit amet ante dictum, et consectetur ligula luctus. Curabitur sodales elit nec iaculis interdum. Vestibulum vulputate tortor quis neque porttitor, eu fringilla tortor malesuada. Donec eros libero, hendrerit vel ipsum vitae, tempor consectetur ante.</p>

        <a
          className="link link--colored" href="mailto:info@bradleywalden.com"
        >
          <div className="icon icon--colored">
            <IconMail />
          </div>
          <span>info@bradleywalden.com</span>
        </a>
      </div>
    )
  }
}
