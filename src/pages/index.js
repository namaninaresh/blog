import * as React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
    {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>

            <p>Updated on : {node.parent.modifiedTime}</p>
        
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        parent {
          ... on File {
            modifiedTime(fromNow: true)
          }
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`


export default BlogPage