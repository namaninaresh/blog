
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

const AboutPage = (props) => {

  return (
    <Layout pageTitle="About Naresh Namani" pageName = {props.path}>
      <Seo  title='About ' description={"Get to know about Naresh Namani"} />
      <div className="about">
        <h3 className="heading">About Me</h3>
       
        {/* <p className="heading__description">
          Learn about me </p> */}
          <div className="about__section">
            <div className="about__pic-outline"><div className="about__pic"></div></div>

            <div className="about__description">
              <p style={{textAlign:"center"}}>
                Hi  Everyone, My name  is <span >Naresh Namani</span>
              </p>
              <p>
               

               Im a front end developer and I love to code the beautiful websites and learning new technologies
              </p>
              <p>
                
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
