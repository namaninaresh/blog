import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import TagIcon from "../components/Icons/TagIcons";

const list = [
  {
    name: "Css",
    iconName: "css",
    to: "css/intro",
  },
  {
    name: "JavaScript",
    iconName: "js",
    to: "js/intro",
  },
  {
    name: "Data Structures",
    iconName: "ds",
    to: "ds/intro",
  },
];

// const list = [
//   {
//     name:"Css",
//     iconName:"css",
//     to:"css/intro"
//   },
//   {
//     name:"JavaScript",
//     iconName:"js",
//     to:"js/intro"
//   },
//   {
//     name:"Data Structures",
//     iconName:"ds",
//     to:"js/intro"
//   },
//   {
//     name:"Algorithms",
//     iconName:"algo",
//     to:"css/intro"
//   },
//   {
//     name:"Git",
//     iconName:"git",
//     to:"js/intro"
//   },
//   {
//     name:"React",
//     iconName:"react",
//     to:"js/intro"
//   },
//   {
//     name:"TypeScript",
//     iconName:"ts",
//     to:"js/intro"
//   },
//   {
//     name:"Webpack",
//     iconName:"webpack",
//     to:"css/intro"
//   },
//   {
//     name:"Python",
//     iconName:"python",
//     to:"js/intro"
//   },
//   {
//     name:"VsCode",
//     iconName:"vscode",
//     to:"js/intro"
//   },
//   {
//     name:"Django",
//     iconName:"django",
//     to:"css/intro"
//   },
//   {
//     name:"Boostrap",
//     iconName:"bootstrap",
//     to:"js/intro"
//   },
//   {
//     name:"Gatsby",
//     iconName:"gatsby",
//     to:"js/intro"
//   }
// ]

const ItemCompo = ({ name, iconName, to }) => (
  <Link className="learn__programming_item" to={to}>
    <div className="learn__programming_item__outline">
      <div className="learn__programming_icon">
        <TagIcon name={iconName} size={45} />
      </div>
    </div>
    <span>{name}</span>
  </Link>
);

const LearnPage = ({ data, path }) => {
  return (
    <Layout pageTitle="Learning" pageName={path}>
      <Seo title={"Learning Page"} />

      <div className="about">
        <h3 className="heading">Learning Page</h3>

        <div className="learn__section">
          <div className="learn__content">
            {list.map((item, index) => (
              <ItemCompo {...item} key={index} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default LearnPage;
