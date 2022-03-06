import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/layout';
import TagIcon  from '../components/Icons/TagIcons';


const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => 
{
return (
    <Layout pageTitle="My Blog Posts">
  <div>
  
    <div className="tags">
      <h1>Tags</h1>
      <ul>
        {group.map((tag,index) => (
        
          <li key={index}>
            
            
            
            <Link to={`/tags/${tag.fieldValue}`} className={tag.fieldValue}>
              <i className='tag__icons '>
              <TagIcon name={tag.fieldValue}  />
              </i>
            <span>{tag.fieldValue[0].toUpperCase() + tag.fieldValue.slice(1)} </span>
                <span className="counter">
                {tag.totalCount}
                </span>
            </Link></li>
        ))}
      </ul>
    </div>
  </div>
  </Layout>
)
        }

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`