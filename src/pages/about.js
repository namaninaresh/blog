import { Link } from "gatsby";
import * as React from "react";
import Icon from "../components/Icons/Icon";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="about">
        <h3 className="heading">About Me</h3>
        <p className="heading__description">
          Learn about me </p>
          <div className="about__section">
            <div className="about__pic"></div>

            <div className="about__description">
              <p>
                Hi  Everyone, My name  is <span >Naresh Namani</span>
              </p>
              <p>
                and can call me as <span>Chinna</span> voluptate tempor magna ea occaecat
                pariatur. Tempor quis ex nisi officia ex reprehenderit labore
                tempor irure deserunt cillum eu do. Reprehenderit aliquip
                pariatur ad aute velit excepteur.
              </p>
              <p>
                Ea elit ad dolore in excepteur occaecat irure adipisicing
                officia do nostrud sint. Irure mollit ex ut aute mollit
                excepteur veniam. Consectetur est dolore in ut. Nostrud
                reprehenderit veniam amet ipsum aliqua. Enim reprehenderit
                commodo id deserunt eiusmod ad velit laborum ipsum officia
                nulla. Elit labore eu labore duis fugiat reprehenderit fugiat
                consequat duis eu qui laborum. Excepteur adipisicing quis
                nostrud qui. Magna adipisicing nulla cillum cillum ex sunt
                cillum dolor sit ea ex. Elit sunt sint Lorem sit qui sunt. Nulla
                voluptate ut sit id occaecat amet aliqua id. Voluptate
                consectetur reprehenderit esse enim aute exercitation incididunt
                voluptate id cupidatat mollit non. Laborum minim aute magna ea
                sit exercitation amet esse minim enim. Qui cillum anim mollit
                fugiat nisi occaecat. Laborum duis pariatur minim ex occaecat
                dolore id reprehenderit non nostrud sunt deserunt esse Lorem.
                Sunt eiusmod est occaecat nisi velit magna cillum Lorem occaecat
                exercitation ipsum dolor veniam qui. Dolor elit veniam ullamco
                qui aute non ullamco.
              </p>
            </div>
          </div>
          <div>
            <div className="about__social">
              <div className="wrapper">
                <div className="icon facebook">
                  <div className="tooltip"> Facebook</div>
                  <span>
                    <i><Icon name="facebook" /></i>
                  </span>
                </div>
                <div className="icon facebook">
                  <div className="tooltip"> Twitter</div>
                  <span>
                    <i><Icon  name="twitter"/></i>
                  </span>
                </div>
                <div className="icon facebook">
                  <div className="tooltip"> Instagram</div>
                  <span>
                    <i><Icon  name="insta"/></i>
                  </span>
                </div>
                <Link to="#" className="icon facebook">
                  <div className="tooltip"> Github</div>
                  <span>
                    <i><Icon  name="github"/></i>
                  </span>
                </Link>
                <Link to="/" className="icon facebook">
                  <div className="tooltip"> dribble</div>
                  <span>
                    <i><Icon  name="dribble"/></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        
      </div>
    </Layout>
  );
};

export default AboutPage;
