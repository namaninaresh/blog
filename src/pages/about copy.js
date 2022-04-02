import { Link } from "gatsby";
import * as React from "react";
import Icon from "../components/Icons/Icon";
import Layout from "../components/layout";
import Seo from "../components/Seo";

const AboutPage = (props) => {
  return (
    <Layout pageTitle="About Naresh Namani" pageName={props.path}>
      <Seo title="About " description={"Get to know about Naresh Namani"} />
      <div className="about">
        <h3 className="heading">About Me</h3>

        {/* <p className="heading__description">
          Learn about me </p> */}
        <div className="about__section">
          <div className="about__pic-outline">
            <div className="about__pic"></div>
          </div>

          <div className="about__description">
            <p style={{ textAlign: "center" }}>
              Hi, I'm <span>NARESH NAMANI </span>
              
            </p>
            <p>Im a front end developer and I love to code the beautiful websites
              and learning new technologies</p>
            <div className="about__exp">
              <div class="icon">
                <Icon name="work" />
              </div>
              <span class="open-sans-font educationyear">Present</span>
              <div class="content">
                <h5>Front End Developer </h5>
                <p>- Tata Consultancy Services</p>
              </div>
            </div>

            <p></p>
          </div>
        </div>
        <div className="skills__section">
          <h3>Skills</h3>
          <p style={{paddingLeft:"1rem"}}>    HTML ,CSS , JavaScript , React , Java</p>
          
        </div>

        <div className="designs__section">
          <h3>UI Designs</h3>
          <div>
            <ul class="gallery caption-2">
              <li>
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14504142/media/2347750585629f1b8bddafc6d33b5959.png"
                      alt=""
                    />
                    <figcaption>
                      <h1>UPSkill - Learning Portal Ui</h1>
                      <p></p>
                    </figcaption>
                  </Link>
                </figure>
              </li> 

              <li>
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      alt=""
                    />
                    <figcaption>
                      <h1>Image Title</h1>
                      <p>By: Someone</p>
                    </figcaption>
                  </Link>
                </figure>
              </li>

              <li>
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14394174/media/5c374442cad32ccd3999245c67b4402d.jpg?compress=1&resize=1200x900&vertical=top"
                      alt=""
                    />
                    <figcaption>
                      <h1>Image Title</h1>
                      <p>By: Someone</p>
                    </figcaption>
                  </Link>
                </figure>
              </li>

              <li>
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14504622/media/1340bf7572895589e403db637ae9e963.png?compress=1&resize=1200x900&vertical=top"
                      alt=""
                    />
                    <figcaption>
                      <h1>Image Title</h1>
                      <p>By: Someone</p>
                    </figcaption>
                  </Link>
                </figure>
              </li>

              <li>
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14394174/media/73f475e230b3501b2683d7fdd7d4c200.jpg?compress=1&resize=1200x900&vertical=top"
                      alt=""
                    />
                    <figcaption>
                      <h1>Image Title</h1>
                      <p>By: Someone</p>
                    </figcaption>
                  </Link>
                </figure>
              </li>

              <li >
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/a13c230eb4ed979c046febe5229cc60b.jpg?compress=1&resize=1200x900&vertical=top"
                      alt=""
                    />
                    <figcaption>
                      <h1>Image Title</h1>
                      <p>By: Someone</p>
                    </figcaption>
                  </Link>
                </figure>
              </li>
              <li >
                <figure>
                  <Link to="#">
                    <img
                      src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/199d1ba644728cbda38f7a5f64b1b13f.jpg?compress=1&resize=1200x900&vertical=top"
                      alt=""
                    />
                    <figcaption>
                      <h1>Image Title</h1>
                      <p>By: Someone</p>
                    </figcaption>
                  </Link>
                </figure>
              </li>
            </ul>
          </div>

          <div className="center">
            <Link to="https://dribbble.com/naresh_namani" target={"_blank"} className="about__see-more"> <Icon name="dribble"/> See more on Dribble</Link>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default AboutPage;
