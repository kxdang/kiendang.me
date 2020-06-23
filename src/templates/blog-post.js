import React from "react"
import { Link, graphql } from "gatsby"
import { Emojione } from "react-emoji-render"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import { MDXRenderer } from "gatsby-plugin-mdx"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>
          <Emojione text={post.frontmatter.title} />
        </h1>
        <small
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date} - {post.fields.readingTime.text}{" "}
          {post.fields.readingTime.minutes > 0 &&
          post.fields.readingTime.minutes <= 2
            ? "🍵"
            : post.fields.readingTime.minutes > 2 &&
              post.fields.readingTime.minutes <= 3
            ? "🍵🍵"
            : post.fields.readingTime.minutes > 3 &&
              post.fields.readingTime.minutes <= 5
            ? "🍵🍵🍵"
            : "🍵🍵🍵🍵"}
          {post.frontmatter.tags ? (
            <p>
              Tags:{" "}
              {post.frontmatter.tags.length > 1 ? (
                post.frontmatter.tags.map(t => (
                  <Link
                    to={`/tags/` + t}
                    className={`${t} alltags`}
                    style={{ marginRight: `3px` }}
                  >
                    {t.replace(/-/g, " ")}
                  </Link>
                ))
              ) : (
                <Link
                  to={`/tags/` + post.frontmatter.tags}
                  className={`${post.frontmatter.tags} alltags`}
                >
                  {post.frontmatter.tags[0].replace(/-/g, " ")}
                </Link>
              )}
            </p>
          ) : null}
        </small>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
