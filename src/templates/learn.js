import * as React from 'react'
import Layout from '../components/layout'
import { graphql,Link} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import Callouts from '../components/Callouts';
import Accordation from '../components/Accordation'

import TagIcon  from '../components/Icons/TagIcons';
import Seo from '../components/Seo'
import Icon from '../components/Icons/Icon';
import LearnSideDrawer from '../components/Toolbar/learnSideDrawer'

const shortcodes = { Callouts,Accordation}


// Components


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

const Tags = ({data,location , pageContext}) => {
let alldata = data.allMdx.edges;
//console.log(alldata)
const index = alldata.findIndex(item => item.node.slug === data.mdx.slug);

//console.log(index)

const [sideDrawerOpen, setSideDrawer] = React.useState(false);
const drawerToggler =() =>{
  setSideDrawer(!sideDrawerOpen)
}

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <Seo title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} />
 
  <div className='blogPage '>
   <div className='blogPage__header'>
   <h1 className='blogPage__heading'>{data.mdx.frontmatter.title}</h1>

      {
        data.mdx.frontmatter.tags.map((tag,index)=> (
          <i className='tag__icons ph-1' key={index}>
      <TagIcon name={tag} />
      </i>
        ))
      }
      <div className='toolbar_togglerIcon content__holder' onClick={drawerToggler} >
                Menu
               <Icon name="sidebar" width={24} height={24} color='#027ffe' /> 
                </div>
    {/* <p> Posted on : {data.mdx.frontmatter.date}</p> */}
   <p><Link to={`/learn/`+pageContext.nextPostId || pageContext.previousPostId} >{pageContext.nextPostId || pageContext.previousPostId}</Link></p>
   </div>
  <hr></hr>
  <MDXProvider components={shortcodes}>
<MDXRenderer>{data.mdx.body}</MDXRenderer>
</MDXProvider>
  </div>
  <LearnSideDrawer show={sideDrawerOpen} drawerToggler={drawerToggler} slug={data.mdx.slug}/>
</Layout>
  )
}


export default Tags

export const pageQuery = graphql`
  query ($id: String , $filePath: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        description
      }
      body
      slug
    }
    allMdx(filter: {fileAbsolutePath: {regex: $filePath}}) {
      edges {
        node {
          slug
          id
        }
      }
    }
  }
`