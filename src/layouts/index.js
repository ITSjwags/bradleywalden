import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
// components
import Nav from '../components/nav';
import Bio from '../components/bio';
// styles
import 'sanitize.css';
import '../styles/index.scss';

export default class Layout extends Component {
  render() {
    const { data, children, location: { pathname } } = this.props;
    const { bg, site } = data;
    const activePage = pathname.split('/')[1];

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
          <Img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%"
            }}
            sizes={bg.sizes}
          />
          <Nav />
          <Bio />

          <div className="buttons">
            <Link
              className={`button ${activePage === 'lessons' ? 'is-active' : ''}`}
              to="/lessons"
            >
              voice lessons
            </Link>

            <Link
              className={`button ${activePage === 'songwriting' ? 'is-active' : ''}`}
              to="/songwriting"
            >
              songwriting
            </Link>
          </div>
        </header>

        <main className="content">
          {/* only need this if we use actual pages */}
          {/* {children()} */}
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
