import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"

//Importing Dark Theme Light Theme Toggler
import ThemeContext from "../context/ThemeContext"
import "../components/layout.css"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
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
                  color: `inherit`,
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
              <button className="dark-switcher" onClick={theme.toggleDark}>
                {theme.dark ? (
                  <div id="lightmodebutton">
                    Light mode{" "}
                    <span role="img" aria-label="sun">
                      🌞
                    </span>
                  </div>
                ) : (
                    <div id="darkmodebutton">
                      Dark mode{" "}
                      <span role="img" aria-label="moon">
                        🌒
                    </span>
                    </div>
                  )}
              </button>
            </div>
            <Bio />
            <h1>{tagHeader}</h1>
            <div>
              <ul style={{ listStyle: `none` }}>
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title } = node.frontmatter
                  const { date } = node.frontmatter

                  return (
                    <li key={slug}>
                      <Link style={{
                        borderBottom: "none"
                      }} to={slug}>{title}</Link>
                      <p><small>{date} - {node.fields.readingTime.text} {node.fields.readingTime.minutes > 0 &&
                        node.fields.readingTime.minutes <= 2
                        ? "🍵"
                        : node.fields.readingTime.minutes > 2 &&
                          node.fields.readingTime.minutes <= 3
                          ? "🍵🍵"
                          : node.fields.readingTime.minutes > 3 &&
                            node.fields.readingTime.minutes <= 5
                            ? "🍵🍵🍵"
                            : "🍵🍵🍵🍵"}</small></p>
                      {/* <p>{description}</p> */}
                    </li>
                  )
                })}
              </ul>
            </div>

            {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
            <Link to="/tags" className="alltags" style={{ color: `white` }}>
              All tags
            </Link>
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
    allMarkdownRemark: PropTypes.shape({
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
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }} }
    ) {
      totalCount
      edges {
        node {
          fields {
            readingTime {
              text
              minutes
            }
            slug
          }
          frontmatter {
            title
            date (formatString: "MMMM DD, YYYY")
          
          }
        }
      }
    }
  }
`
