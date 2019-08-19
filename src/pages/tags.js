import React from "react"
import PropTypes from "prop-types"
import { rhythm, scale } from "../utils/typography"
// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"

//Adding toggle to Tags overall summary
import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <ThemeContext.Consumer>
    {theme => (
      <div className={theme.dark ? "dark" : "light"}>
        <div>
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
                {title}
              </Link>
            </h1>
            <div
              id="toggleTheme"
              style={{ display: `flex`, justifyContent: `flex-end` }}
            >
              <button className="dark-switcher" onClick={theme.toggleDark}>
                {theme.dark ? (
                  <div id="lightmodebutton">Light mode 🌞</div>
                ) : (
                  <div id="darkmodebutton">Dark mode 🌒</div>
                )}
              </button>
            </div>
            <Bio />
            <Helmet title={title} />

            <div>
              <h1>Tags</h1>
              <ul>
                {group.map(tag => (
                  <li key={tag.fieldValue} style={{ listStyle: `none` }}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
