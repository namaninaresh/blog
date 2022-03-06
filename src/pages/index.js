import * as React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import TagIcon  from '../components/Icons/TagIcons';

const PostItem = ({node})=> 
{
  return(
   
  
    <div className='post__item border-outline'>
          <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
  
          <div className='post__body'>
            <p>Checking the network cables, modem and router Checking the network cables, modem and router Checking the network cables, modem and router
            Checking the network cables, modem and router Checking the network cables,
            Checking the network cables, modem and router Checking the network cables,
            Checking the network cables, modem and router Checking the network cables,
  
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



const BlogPage = ({data}) => {
  
  return (
    <Layout pageTitle="My Blog Posts">

        <section className='home__layout'>


<div className='articleContainer'>
<h1 className="heading">Articles
         
         </h1>
{
        data.allMdx.nodes.map((node) => <PostItem node={node} key={node.id}/> )

}

</div>
<div className='sidebarContainer'>
<h1 className="heading">Tags    </h1>

<div className='tags'>
  <ul>
    <li>
      
      
      
      <Link to="/tags/git" className='git'>
        <i className='tag__icons '>
        <TagIcon name='git'  />
        </i>
      <span>Git</span></Link></li>
      <li>
      
      <Link to="/tags/python" className='python'>
        <i className='tag__icons '>
        <TagIcon name='python'   />
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
        <TagIcon name='react'   />
        </i>
      <span>React</span></Link></li><li>
      
      
      
      <Link to="#" className='js'>
        <i className='tag__icons '>
        <TagIcon name='js' />
        </i>
      <span>Javascript</span></Link></li>
  </ul>

</div>
</div>
        </section>

 
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
          tags
        }
        id
        slug
      }
    }
  }
`


export default BlogPage