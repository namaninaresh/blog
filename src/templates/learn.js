import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Callouts from "../components/Callouts";
import Accordation from "../components/Accordation";
import AccordationRoadMap from "../components/AccordationRoadMap";

import Seo from "../components/Seo";
import Icon from "../components/Icons/Icon";
import LearnSideDrawer from "../components/Toolbar/LearnSideDrawer";

import learnNav from "../data/learnNav.json";

const shortcodes = { Callouts, Accordation, AccordationRoadMap };

// Components

const NavDropdown = (props) => {
  return (
    <div className="nav__dropdown">
      <div className="nav__link">
        <span className="nav__name">
          <div className="dot"></div>
          {props.name}
        </span>

        <i className="nav__icon nav__dropdown-icon">
          <Icon name="dropdown" width={16} height={16} color="#0d96f2" />
        </i>
      </div>
      <div className="nav__dropdown-colapse">
        <div className="nav__dropdown-content">
          {props.items.map((item, index) => {
            if (item.link instanceof Object)
              return (
                <NavDropdown items={item.link} key={index} name={item.name} />
              );

            return (
              <Link
                to={`/learn/${props.folderName}/${item.link}`}
                className="nav__dropdown-item"
                role={"link"}
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ name, link, folderName }) => {
  if (link instanceof Object)
    return <NavDropdown items={link} name={name} folderName={folderName} />;

  return (
    <Link
      to={`/learn/${folderName}/${link}`}
      className="nav__link"
      role={"link"}
    >
      <span className="nav__name">
        <div className="dot"></div> {name}
      </span>
    </Link>
  );
};

const Tags = ({ data, location, pageContext }) => {
  let alldata = data.allMdx.edges;

  const index = alldata.findIndex((item) => item.node.slug === data.mdx.slug);

  //console.log(index)
  let folderName = data.mdx.slug.split("/")[0];

  const [sideDrawerOpen, setSideDrawer] = React.useState(false);
  const drawerToggler = () => {
    setSideDrawer(!sideDrawerOpen);
  };
  const navItems = learnNav[folderName].map((item, index) => (
    <ListItem key={index} {...item} folderName={folderName} />
  ));

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <div className="learn">
        <div className="learn__sidebar">{navItems}</div>
        <div className="blogPage">
          <div className="blogPage__header">
            <h1 className="blogPage__heading">{data.mdx.frontmatter.title}</h1>

            <div
              className="toolbar_togglerIcon content__holder"
              onClick={drawerToggler}
            >
              Menu
              <Icon name="sidebar" width={24} height={24} color="#027ffe" />
            </div>
            {/* <p> Posted on : {data.mdx.frontmatter.date}</p> */}
            {/* <p><Link to={`/learn/`+ (pageContext.nextPostId || pageContext.previousPostId)} >{pageContext.nextPostId || pageContext.previousPostId}</Link></p> */}
          </div>
          <hr></hr>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
      <LearnSideDrawer
        show={sideDrawerOpen}
        drawerToggler={drawerToggler}
        slug={data.mdx.slug}
      />
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($id: String, $filePath: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        description
      }
      body
      slug
    }
    allMdx(filter: { fileAbsolutePath: { regex: $filePath } }) {
      edges {
        node {
          slug
          id
        }
      }
    }
  }
`;
