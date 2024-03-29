import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
// components
import Nav from '../components/nav'
import Bio from '../components/bio'
import Lessons from '../components/lessons'
import Songshop from '../components/songshop'
import Lyrics from '../components/lyrics'
// styles
import 'sanitize.css'
import '../styles/index.scss'
// images
import AppleTouch from '../images/apple-touch-icon.png'
import Favicon32 from '../images/favicon-32x32.png'
import Favicon16 from '../images/favicon-16x16.png'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAllContent: false,
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.setState({
      showAllContent: window.innerWidth < 640,
    })
  }

  render() {
    const {
      data,
      location: { pathname },
    } = this.props
    const { bg, site } = data
    const { showAllContent } = this.state
    const activePage = pathname.split('/')[1]
    const goodUrl =
      activePage === 'lessons' ||
      activePage === 'lyricsheet' ||
      activePage === 'songshop'

    return (
      <div className={!!activePage && goodUrl ? 'is-active' : ''}>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Bradley Walden: singer, songwriter, performer.',
            },
            {
              name: 'keywords',
              content:
                'bradley walden, voice lessons, songwriting, emarosa, music, band',
            },
            { name: 'msapplication-TileColor', content: '#00000' },
            { name: 'theme-color', content: '#00000' },
          ]}
        >
          <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        </Helmet>

        <header className="header">
          <Img
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
            sizes={bg.sizes}
          />
          <Nav />
          <Bio />

          <div className="buttons">
            <Link
              className={`button ${
                activePage === 'songshop' ? 'is-active' : ''
              }`}
              to="/songshop"
            >
              Song Shop
            </Link>

            <Link
              className={`button ${
                activePage === 'lyricsheet' ? 'is-active' : ''
              }`}
              to="/lyricsheet"
            >
              Handwritten Lyrics
            </Link>

            <Link
              className={`button ${
                activePage === 'lessons' ? 'is-active' : ''
              }`}
              to="/lessons"
            >
              Voice Lessons
            </Link>
          </div>
        </header>

        <main className="content">
          <Songshop active={showAllContent || activePage === 'songshop'} />
          <Lyrics active={showAllContent || activePage === 'lyricsheet'} />
          <Lessons active={showAllContent || activePage === 'lessons'} />

          {(showAllContent || activePage) && (
            <Link className="close" to="/">
              +
            </Link>
          )}
        </main>
      </div>
    )
  }
}

export const query = graphql`
  query indexPageImagesAndSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    bg: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1440) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
