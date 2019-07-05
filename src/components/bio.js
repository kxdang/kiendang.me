/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Nav from "../components/nav"
import { rhythm } from "../utils/typography"

import ThemeContext from "../context/ThemeContext"

import "./layout.css"
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <ThemeContext.Consumer>
            {theme => (
              <div
                style={{
                  display: `flex`,
                  marginBottom: `35px`,
                  justifyContent: `space-between`,
                  alignItems: `center`,
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    textAlign: `center`,
                  }}
                >
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author}
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      minWidth: 50,
                      borderRadius: `100%`,
                    }}
                    imgStyle={{
                      borderRadius: `50%`,
                    }}
                  />
                  <p
                    id="bio"
                    style={{
                      color: `#f78c6c`,
                      margin: `auto`,
                    }}
                  >
                    A blog by <strong>Kien</strong>
                  </p>
                </div>
                <div id="toggleTheme" style={{}}>
                  <button className="dark-switcher" onClick={theme.toggleDark}>
                    {theme.dark ? (
                      <div>Light mode ☀</div>
                    ) : (
                      <div>Dark mode ☾</div>
                    )}
                  </button>
                </div>

                <Nav />
              </div>
            )}
          </ThemeContext.Consumer>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/Avatar.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
