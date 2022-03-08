module.exports = {
  siteMetadata: {
    title: `Naresh Namani blog`,
    author: {
      name: `@NareshNamani6`,
      summary: `An Visualized and interactive tutorials to learn programming languages in a easy way. `,
    },
    description: `An Visualized and interactive tutorials to learn programming languages in a easy way. `,
    siteUrl: `https://nareshnamaniblog.gatsbyjs.io/`,
    titleTemplate: "%s · Naresh Namani ",
    image: "/profile.jpg", 
    keywords: `naresh namani blog, naresh namani, programming blog, learn programming`,
    twitterUsername: `@NareshNamani6`,
  
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    

    ]
}