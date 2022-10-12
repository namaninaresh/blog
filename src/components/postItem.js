import React from "react";
import { Link } from "gatsby";
import TagIcon from "../components/Icons/TagIcons";
const PostItem = ({ node }) => {
  return (
    <article className="post__item border-outline">
      <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>

      <div className="post__body">
        <p> {node.frontmatter.description}</p>
      </div>

      <div className="post__tags">
        <ul>
          {node.frontmatter.tags.map((tag, index) => (
            <i className="tag__icons " key={index}>
              <TagIcon name={tag} />
            </i>
          ))}
        </ul>
        <p className="post__date"> {node.frontmatter.date}</p>
      </div>
    </article>
  );
};

export default PostItem;
