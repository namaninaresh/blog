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
