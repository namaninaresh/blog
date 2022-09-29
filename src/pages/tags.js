import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import TagIcon from "../components/Icons/TagIcons";
import PostItem from "../components/postItem";
import Seo from "../components/Seo";

function TagsPage({ data, path }) {
  const [filteredData, setFilteredData] = useState(data.allMdx.edges);
  const [selectionName, setName] = useState("All tags");
  const update = (name) => {
    let filteed = data.allMdx.edges.filter(({ node }) =>
      node.frontmatter.tags.includes(name)
    );
    setFilteredData(filteed);
    setName(name);
  };

  let h3_title = "All Posts";

  if (selectionName !== "All tags")
    h3_title = `${filteredData.length} posts tagged with "${selectionName}"`;

  return (
    <Layout pageTitle="My Blog Posts" pageName={path}>
      <Seo
        title="Articles on tags selected"
        description={
          "Articles based on the interests of selected tags to learn "
        }
      />
      <div>
        <div className="tags">
          <h1>Tags</h1>

          <ul>
            {data.allMdx.group.map((tag, index) => (
              <li key={index}>
                <Link
                  to="#"
                  onClick={() => update(tag.fieldValue)}
                  className={tag.fieldValue}
                >
                  <i className="tag__icons ">
                    <TagIcon name={tag.fieldValue} />
                  </i>
                  <span>
                    {tag.fieldValue[0].toUpperCase() + tag.fieldValue.slice(1)}{" "}
                  </span>
                  <span className="counter">{tag.totalCount}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            {filteredData.length > 0 && (
              <>
                <h3 className="heading">{h3_title}</h3>
                <ul style={{ margin: 0, padding: 0 }}>
                  {filteredData.map(({ node }, index) => (
                    <PostItem node={node} key={index} />
                  ))}
                </ul>
              </>
            )}
          </div>
          {/* <ul>
        {data.allMdx.group.map((tag,index) => (
        
          <li key={index}>
            
            
            
            <Link to={`/tags/${tag.fieldValue}`} className={tag.fieldValue}>
              <i className='tag__icons '>
              <TagIcon name={tag.fieldValue}  />
              </i>
            <span>{tag.fieldValue[0].toUpperCase() + tag.fieldValue.slice(1)} </span>
                <span className="counter">
                {tag.totalCount}
                </span>
            </Link></li>
        ))}
      </ul> */}
        </div>
      </div>
    </Layout>
  );
}

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "MMMM D, YYYY")
          }
          id
          slug
        }
      }
    }
  }
`;
