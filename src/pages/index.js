import * as React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import TagIcon  from '../components/Icons/TagIcons';
import PostItem from '../components/postItem';
import Seo from '../components/seo';



const BlogPage = ({data}) => {
  
  return (
    <Layout pageTitle="My Blog Posts">
      <Seo  title='Naresh Namani' description={"An Visualized and interactive tutorials to learn programming languages in a easy way"}/>

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
      
      
      
      <Link to="/tags/ds" className='ds'>
        <i className='tag__icons '>
        <TagIcon name='ds'  />
        </i>
      <span>Data Structures</span></Link></li><li>
      
      
      
      <Link to="/tags/algo" className='algo'>
        <i className='tag__icons '>
        <TagIcon name='algo'  />
        </i>
      <span>Algo</span></Link></li><li>
      
      
      
      <Link to="/tags/react" className='react'>
        <i className='tag__icons '>
        <TagIcon name='react'   />
        </i>
      <span>React</span></Link></li><li>
      
      
      
      <Link to="/tags/js" className='js'>
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
          description
          tags
        }
        id
        slug
      }
    }
  }
`


export default BlogPage