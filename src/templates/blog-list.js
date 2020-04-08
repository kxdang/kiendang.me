import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="A blog by Kien" />
        <Bio />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, borderBottom: "none" }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date}
                <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
                  <Link
                    to={`/tags/` + node.frontmatter.tags}
                    className={`${node.frontmatter.tags} alltags`}
                  >
                    {node.frontmatter.tags}
                  </Link>

                </p>
              </small>

              {/*                 
                {node.frontmatter.tags.length > 1 ? (
                  node.frontmatter.tags.map(t => (
                    <Link
                      to={`/tags/` + t}
                      className={`${t} alltags`}
                      style={{ marginRight: `3px` }}
                    >
                      {t.replace(/-/g, " ")}
                    </Link>
                  ))
                ) : (
                   
                  )} */}
              {/* - {node.fields.readingTime.text}{" "}
                {node.fields.readingTime.minutes > 0 &&
                node.fields.readingTime.minutes <= 2
                  ? "🍵"
                  : node.fields.readingTime.minutes > 2 &&
                    node.fields.readingTime.minutes <= 3
                  ? "🍵🍵"
                  : node.fields.readingTime.minutes > 3 &&
                    node.fields.readingTime.minutes <= 5
                  ? "🍵🍵🍵"
                  : "🍵🍵🍵🍵"}
                <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
             

                </p> */}



              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? "" : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#1B1E2B" : "",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}

          {!isLast && (
            <Link to={`/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
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
