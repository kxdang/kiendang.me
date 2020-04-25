import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"

import PostPreview from '../components/PostPreview'
import SearchPreview from '../components/SearchPreview'

import {
  InstantSearch,
  Index,
  Hits,
  Highlight,
  searchState,
  SearchBox,
  connectStateResults
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)


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

    const Results = connectStateResults(({ searchState, children }) =>
      searchState && searchState.query ? (
        <div>
          <p style={{ marginTop: `1rem`, textAlign: `right` }}>Searching for query {searchState.query}</p>
          {children}
        </div>
      ) : (
          null
        )
    );

    const Hit = ({ hit }) => <SearchPreview hit={hit} title={hit.title} expert={hit.exerpt} description={hit.description} slug={hit.fields.slug} readingTime={hit.fields.readingTime} date={hit.date} />

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="A blog by Kien" />
        <Bio />


        <InstantSearch searchClient={searchClient} indexName="Blog">
          <SearchBox />
          <Results>
            <Hits hitComponent={Hit} />
          </Results>
        </InstantSearch>



        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const { slug, readingTime } = node.fields
          const { date, tags, excerpt, description } = node.frontmatter
          return (
            <div key={node.fields.slug}>

              <PostPreview key={slug} title={title} date={date} tags={tags} description={description} excerpt={excerpt} slug={slug} readingTime={readingTime} />
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
