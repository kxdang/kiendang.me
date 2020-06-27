import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"
import { timeWithTea } from "../utils/utils.js"

//Importing Dark Theme Light Theme Toggler
import ThemeContext from "../context/ThemeContext"
import "../components/layout.css"
import Switch from "react-switch"
import { EmojioneV4 } from "react-emoji-render"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: `100vh`,
            }}
          >
            <h1
              style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                }}
                to={`/`}
              >
                {data.site.siteMetadata.title}
              </Link>
            </h1>
            <div
              id="toggleTheme"
              style={{ display: `flex`, justifyContent: `flex-end` }}
            >
              <Switch
                onChange={theme.toggleDark}
                checked={theme.dark}
                onColor="#292D3E"
                offColor="#292D3E"
                offHandleColor="#fefefe"
                onHandleColor="#586184"
                checkedIcon={
                  <span
                    style={{ marginLeft: "0.3rem" }}
                    role="img"
                    aria-label="sun"
                  >
                    🌞
                  </span>
                }
                uncheckedIcon={
                  <span
                    style={{ marginLeft: "0.3rem" }}
                    role="img"
                    aria-label="moon"
                  >
                    🌒
                  </span>
                }
                activeBoxShadow="0 0 2px 3px #226597"
              />
            </div>
            <Bio />
            <h1>{tagHeader}</h1>
            <Link to="/tags" className="alltags" style={{ color: `white` }}>
              ALL TAGS
            </Link>
            <div style={{ paddingTop: `1rem` }}>
              <ul style={{ listStyle: `none` }}>
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title } = node.frontmatter
                  const { description } = node.frontmatter

                  return (
                    <li key={slug}>
                      <Link
                        style={{
                          borderBottom: "none",
                          fontSize: `1.2rem`,
                          fontWeight: `bold`,
                        }}
                        to={slug}
                      >
                        <EmojioneV4 text={title} />
                      </Link>

                      <small>
                        {" "}
                        - {node.fields.readingTime.text}{" "}
                        {timeWithTea(node.fields.readingTime.minutes)}
                      </small>

                      {/* <p style={{ marginBottom: `3px` }}> </p> */}
                      <p style={{ fontSize: `0.8rem`, marginBottom: `1.8rem` }}>
                        {description}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            readingTime {
              text
              minutes
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
