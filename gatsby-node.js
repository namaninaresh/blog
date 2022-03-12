const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/pages/post.js`);
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const learnTemplate = path.resolve("./src/templates/learn.js")

  const returnPrevNextid = ( allEdges, slug )=>{


    console.log(slug)

    let filterdArr = [];

    



    allEdges.forEach(item=>
      {
        let arr = item.slug.split("/")[0];

        if(arr === slug.split("/")[0])
        {
          filterdArr.push(item);
        }

      })
    
      console.log(filterdArr);

     let index = filterdArr.findIndex(item=> item.slug=== slug);


    let prvId = null;
    let nexId = null;

    if(((index-1) > 0) && ((index -1) < filterdArr.length))
    {
      prvId = index-1;
    }

    console.log("prevId "+ prvId);


  }

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        
        allMdx(
          filter: {fileAbsolutePath: {regex: "/content/blog/"}}
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 1000
        ) {
          nodes {
            id
            slug
          }
        }
      
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        learnGroup: allMdx(
          filter: {fileAbsolutePath: {regex: "/content/docs/"}}
          sort: {fields: [frontmatter___date], order: ASC}
          limit: 1000
        ) {
          nodes {
            id
            slug
          }
        }
     
      } 
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    //console.log(posts[0]['slug'])
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
   
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }


  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  //extract folder wise mdx
const learnEdges = result.data.learnGroup.nodes


learnEdges.forEach((item,index) =>{

  const previousPostId = index === 0 ? null : learnEdges[index - 1].slug
      const nextPostId = index === learnEdges.length - 1 ? null : learnEdges[index + 1].slug


  //returnPrevNextid(learnEdges , item.slug)
    createPage({
      path:`/learn/${item.slug}`,
      component:learnTemplate,
      context:{
        id: item.id, 
        filePath:    `/${item.slug.split("/")[0]}/`,
        previousPostId,
        nextPostId,
      }
    })

})

}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
