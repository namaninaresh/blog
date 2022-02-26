import * as React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostItem = ({node})=> 
{
  return(
   
  
    <div className='post__item border-outline'>
          <a href={`/${node.slug}`}>{node.frontmatter.title}</a>
  
          <div className='post__body'>
            <p>Checking the network cables, modem and router Checking the network cables, modem and router Checking the network cables, modem and router
            Checking the network cables, modem and router Checking the network cables,
            Checking the network cables, modem and router Checking the network cables,
            Checking the network cables, modem and router Checking the network cables,
  
            </p>
  
          </div>
  
          <div className='post__tags'>
                  <ul>
                    <li className='border-outline'>React</li>
                  </ul>
                  <p className='post__date'>Posted: {node.frontmatter.date}</p>
          </div>
    </div>
  
  );
}



const BlogPage = ({data}) => {
  
  return (
    <Layout pageTitle="My Blog Posts">


<div className='articleContainer'>
<h1 className="heading">Articles
         
         </h1>
{
        data.allMdx.nodes.map((node) => <PostItem node={node} key={node.id}/> )

}
{
        data.allMdx.nodes.map((node) => <PostItem node={node} key={node.id}/> )

}
</div>
<div className='sidebarContainer'>
<h1 className="heading">Tags    </h1>

<div className='tags'>
  <ul>
    <li><Link to="#">Git</Link></li>
    <li><Link to="#">Python</Link></li>
    <li><Link to="#">Javascript</Link></li>
    <li><Link to="#">Data Structures</Link></li>
    <li><Link to="#">Java</Link></li>
    <li><Link to="#">Other</Link></li>
  </ul>

</div>
</div>

 
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