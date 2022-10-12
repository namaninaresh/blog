import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Callouts from "../components/Callouts";
import Accordation from "../components/Accordation";
import Video from "../components/Video";

import TagIcon from "../components/Icons/TagIcons";
import Seo from "../components/Seo";
const shortcodes = { Callouts, Accordation, Video };

const BlogPost = ({ data, location, pageContext }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />

      <article className="blogPage ">
        <div className="blogPage__header">
          <h1 className="blogPage__heading">{data.mdx.frontmatter.title}</h1>

          {data.mdx.frontmatter.tags.map((tag, index) => (
            <i className="tag__icons ph-1" key={index}>
              <TagIcon name={tag} />
            </i>
          ))}

          <p> Posted on : {data.mdx.frontmatter.date}</p>
          {/* <p><Link to={pageContext.nextPostId} >{pageContext.nextPostId}</Link></p> */}
        </div>
        <hr></hr>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        description
      }
      body
    }
  }
`;
export default BlogPost;
