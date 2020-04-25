const blogQuery = `
{
  allMdx {
    edges {
      node {
        id
        frontmatter {
          description
          date(formatString: "MMMM DD, YYYY")
          tags
          title
        }
        fields {
          readingTime {
            minutes
            text
          }
          slug
        }
        excerpt
      }
    }
  }
}
`

const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        ...rest,
    }))

const settings = { attributesToSnippet: [`excerpt:3`] }

const queries = [
    {
        query: blogQuery,
        indexName: "Blog",
        transformer: ({ data }) => flatten(data.allMdx.edges),
        settings
    }
]

module.exports = queries