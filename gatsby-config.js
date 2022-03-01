module.exports = {
  siteMetadata: {
    title: `Naresh Namani blog`,
    author: {
      name: `Naresh Namani`,
      summary: `Blog to learning programming Languages and tricks`,
    },
    description: `A starter blog demonstrating prgoramming lanaguages tricks.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
    plugins: [
      `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    

    ]
}