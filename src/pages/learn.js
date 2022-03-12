
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { graphql, Link } from 'gatsby'

const AboutPage = ({data}) => {

  return (
    <Layout pageTitle="Learning">
      <Seo title={"Learning Page"}  />
      <div className="about">
        <h3 className="heading">Learning Page</h3>
        
          <div className="about__section">
            
            <div className="about__description">
              
              <p>

                <Link to="css">Css</Link>

                <Link to="js">Javascript</Link>
              </p>
            </div>
          </div>
          <div>
            
          </div>
        
      </div>
    </Layout>
  );
};

export default AboutPage;



