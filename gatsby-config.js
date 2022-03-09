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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Naresh Namani Blog",
        short_name: "NN Blog",
        start_url: "/",
        background_color: "#0e0c0f",
        theme_color: "#0e0c0f",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
     
    },
    'gatsby-plugin-offline',
  
    

    ]
}