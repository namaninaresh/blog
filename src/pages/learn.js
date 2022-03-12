
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { graphql, Link } from 'gatsby'
import TagIcon  from '../components/Icons/TagIcons';

const AboutPage = ({data}) => {

  return (
    <Layout pageTitle="Learning">
      <Seo title={"Learning Page"}  />
      <div className="about">
        <h3 className="heading">Learning Page</h3>
        
          <div className="about__section">
            
            <div className="learn__content">
              
               <Link className="learn__programming_item" to="css/intro">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"css"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Css</Link>
               </Link>
            
            
               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"js"} size={45} />    
                
                </div>
               </div>
               <Link to="js/intro">JavaScript</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"ds"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Data Structures</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"algo"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Algorithms</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"git"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Git</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"react"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">React</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"ts"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">TypeScript</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"webpack"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Webpack</Link>
               </div>
               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"python"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Python</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"vscode"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">VsCode</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"django"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Django</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"bootstrap"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">BootStrap</Link>
               </div>

               <div className="learn__programming_item">
               <div className="learn__programming_item__outline">
               <div className="learn__programming_icon">
                <TagIcon name={"gatsby"} size={45} />    
                
                </div>
               </div>
               <Link to="css/intro">Gatsby</Link>
               </div>

            </div>
          </div>
          <div>
            
          </div>
        
      </div>
    </Layout>
  );
};

export default AboutPage;



