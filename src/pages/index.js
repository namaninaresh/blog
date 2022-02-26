import * as React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import TagIcon  from '../components/Icons/TagIcons';
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
    <li>
      
      
      
      <Link to="#" className='git'>
        <i className='tag__icons '>
        <TagIcon name='git' color='#f05133' />
        </i>
      <span>Git</span></Link></li>
      <li>
      
      
      
      <Link to="#" className='python'>
        <i className='tag__icons '>
        <TagIcon name='python'  color='#306998' />
        </i>
      <span>Python</span></Link></li><li>
      
      
      
      <Link to="#" className='ds'>
        <i className='tag__icons '>
        <TagIcon name='ds'  />
        </i>
      <span>Data Structures</span></Link></li><li>
      
      
      
      <Link to="#" className='algo'>
        <i className='tag__icons '>
        <TagIcon name='algo'  />
        </i>
      <span>Algo</span></Link></li><li>
      
      
      
      <Link to="#" className='react'>
        <i className='tag__icons '>
        <TagIcon name='react' color='#61DBFB'  />
        </i>
      <span>React</span></Link></li><li>
      
      
      
      <Link to="#" className='js'>
        <i className='tag__icons '>
        <TagIcon name='js' color='#F0DB4F' />
        </i>
      <span>Javascript</span></Link></li>
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