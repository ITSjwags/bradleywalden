import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
// components
import Nav from '../components/nav';
import Bio from '../components/bio';
import Lessons from '../components/lessons';
import Songwriting from '../components/songwriting';
// styles
import 'sanitize.css';
import '../styles/index.scss';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllContent: false
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.setState({
      showAllContent: (window.innerWidth < 640)
    });
  }

  render() {
    const { data, children, location: { pathname } } = this.props;
    const { bg, site } = data;
    const { showAllContent } = this.state;
    const activePage = pathname.split('/')[1];

    return (
      <div className={activePage ? 'is-active' : ''}>
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
          {(showAllContent || activePage === 'lessons') && <Lessons />}
          {(showAllContent || activePage === 'songwriting') && <Songwriting />}

          {(showAllContent || activePage) &&
            <Link
              className="close"
              to="/"
            >
              +
          </Link>
          }
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
