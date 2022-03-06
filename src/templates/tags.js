import React from "react"
import PropTypes from "prop-types"

import Layout from '../components/layout';

import TagIcon  from '../components/Icons/TagIcons';


// Components
import { Link, graphql } from "gatsby"


const PostItem = ({node})=> 
{
  return(
   
  
    <div className='post__item border-outline'>
          <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
  
          <div className='post__body'>
            <p> {node.frontmatter.description}  
            </p>
  
          </div>
    
      
          <div className='post__tags'>
                  <ul>
                  {node.frontmatter.tags.map((tag,index) => <i className='tag__icons ' key={index}>
        <TagIcon name={tag}   />
        </i> )}
                    
                  </ul>
                  <p className='post__date'> {node.frontmatter.date}</p>
          </div>
    </div>
  
  );
}

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout pageTitle="My Blog Posts">
    <div>
      <h3 className="heading">{tagHeader}</h3>
      <ul style={{margin:0, padding:0}}>
        {edges.map( ({node},index)  => <PostItem node={node} key={index} /> )}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags" style={{color:"wheat",textDecoration:"none"}}>All tags</Link>
    </div>
    </Layout>
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
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "MMMM D, YYYY")
          }
          id,
          slug
        }
      }
    }
  }
`