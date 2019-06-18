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
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
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
                  style={{ boxShadow: `none`, color: `var(--textLink)` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small style={{ color: `var(--date)` }}>
                {node.frontmatter.date} - {node.fields.readingTime.text}{" "}
                {node.fields.readingTime.minutes > 0 &&
                node.fields.readingTime.minutes <= 3
                  ? "🍵"
                  : node.fields.readingTime.minutes > 3 &&
                    node.fields.readingTime.minutes <= 6
                  ? "🍵🍵"
                  : "🍵🍵🍵"}
              </small>
              <p>{node.frontmatter.tags}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          fields {
            readingTime {
              text
              minutes
            }
          }
        }
      }
    }
  }
`
