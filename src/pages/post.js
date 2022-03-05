import * as React from 'react'
import Layout from '../components/layout'
import { graphql,Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import Callouts from '../components/Callouts';
import Accordation from '../components/Accordation'
const shortcodes = { Callouts,Accordation}

const BlogPost = ({data,location}) => {
  console.log(data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
   
    <div className='blogPage '>
     <div className='blogPage__header'>
     <h1 className='blogPage__heading'>{data.mdx.frontmatter.title}</h1>
      <p> Posted on : {data.mdx.frontmatter.date}</p>
     
     </div>
    <hr></hr>
    <MDXProvider components={shortcodes}>
  <MDXRenderer>{data.mdx.body}</MDXRenderer>
</MDXProvider>
    </div>
  </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
export default BlogPost

