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
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"

import "../styles/styles.scss"
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: `0rem`,
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
                  margin: `auto`,
                  textAlign: "left",
                }}
              >
                A blog by{" "}
                <strong>
                  <a href="https://www.kien.dev/">Kien</a>
                </strong>
                <br></br>
                <div className="bio-links">
                  <a href="https://twitter.com/k1dang">
                    <FaTwitter />
                  </a>
                  <a
                    style={{ paddingLeft: `0.5rem` }}
                    href="https://www.linkedin.com/in/kien-dang/"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    style={{ paddingLeft: `0.5rem` }}
                    href="https://github.com/kxdang"
                  >
                    <FaGithub />
                  </a>
                </div>
              </p>
            </div>

            <Nav />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/Avatar.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
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
