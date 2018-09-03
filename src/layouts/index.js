import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
// components
import Nav from '../components/nav';
import Bio from '../components/bio';
// styles
import 'sanitize.css';
import '../styles/index.scss';

export default class Layout extends Component {
  render() {
    const { data, children } = this.props;
    const { bg, site } = data;

    return (
      <div>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Personal website for Bradley Walden.' },
            { name: 'keywords', content: 'bradley walden, voice lessons, songwriting, emarosa, music, band' },
          ]}
        />

        <header className="header">
          <div className="bg-container">
            <Img
              className="bg-image"
              sizes={bg.sizes}
            />
          </div>

          <Nav />
          <Bio />
        </header>

        <main className="content">
          {children()}
        </main>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query indexPageImagesAndSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    bg: imageSharp(id: {regex: "/bg.png/"}) {
      sizes(maxWidth: 1440) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
