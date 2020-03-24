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

import "./layout.css"
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
                  margin: `auto`,
                }}
              >
                A blog by{" "}
                <strong>
                  <a href="https://www.kien.dev/">Kien</a>
                </strong>
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
        fixed(width: 70, height:70) {
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
