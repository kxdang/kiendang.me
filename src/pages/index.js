import React from "react"
import { rhythm, scale } from "../utils/typography"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Switch from "react-switch"
import { Twemoji } from "react-emoji-render"
import { graphql } from "gatsby"
import ThemeContext from "../context/ThemeContext"
import PostPreview from "../components/PostPreview"

import "../styles/styles.scss"
import "../styles/timeline.scss"

const Index = ({ data }) => {
  console.log(data)
  const posts = data.allMdx.edges
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
                  borderBottom: `none`,
                  boxShadow: `none`,
                  textDecoration: `none`,
                }}
                to="/"
              >
                {" "}
                Kien Dang
              </Link>
            </h1>
            <div
            // style={{
            //   marginLeft: `auto`,
            //   marginRight: `auto`,
            //   maxWidth: rhythm(24),
            // }}
            >
              <div
                id="toggleTheme"
                style={{ display: `flex`, justifyContent: `flex-end` }}
              >
                <Switch
                  onChange={theme.toggleDark}
                  checked={theme.dark}
                  onColor="#27374c"
                  offColor="#222831"
                  offHandleColor="#fefefe"
                  onHandleColor="#fefefe"
                  checkedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="sun"
                    >
                      <Twemoji text="🌒" />
                    </span>
                  }
                  uncheckedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="moon"
                    >
                      <Twemoji text="🌞" />
                    </span>
                  }
                  activeBoxShadow="0 0 2px 3px #226597"
                />
              </div>
              <Bio homepage />
            </div>
            <div>
              <h3 style={{ lineHeight: "1.4" }}>
                Hi there{" "}
                <span role="img" aria-label="wave">
                  <Twemoji text="👋" />
                </span>
                ,<br></br> Welcome to my personal website.
              </h3>
              <h3 style={{ lineHeight: "1.4" }}>
                I am currently a Software Developer at Coveo with a focus on
                Front-end technologies using:
              </h3>
              <ul style={{ marginLeft: "2rem" }}>
                <li>HTML / CSS / SASS</li>
                <li>JavaScript / TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>React Testing Library/ Jest/ Enzyme</li>
                <li>GraphQL</li>
              </ul>

              <h3 style={{ marginBottom: "2rem" }}>Recent blog posts...</h3>
              <div className="post-grid">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  const { slug, readingTime } = node.fields
                  const { date, tags } = node.frontmatter
                  return (
                    <Link className="post-card" to={slug}>
                      <div key={slug}>
                        <PostPreview
                          key={slug}
                          title={title}
                          date={date}
                          tags={tags}
                          slug={slug}
                          readingTime={readingTime}
                          homepage
                        />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Index

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
              minutes
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
