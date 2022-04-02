import { Link } from "gatsby";
import * as React from "react";
import Icon from "../components/Icons/Icon";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import TagIcon from '../components/Icons/TagIcons';

const AboutPage = (props) => {
  const [tabActive, setTabStatus] = React.useState("skills");

  return (
    <Layout pageTitle="About Naresh Namani" pageName={props.path}>
      <Seo title="About " description={"Get to know about Naresh Namani"} />

      <div class="profile container " style={{ marginTop: "1rem" }}>
        <div className="profile__dev">
          <div className="profile_dev container">
            <div class="profile__border">
              <div className="about__pic"></div>
            </div>

            <div className="profile_desc">
              <div>
                <h2 class="profile__name">
                  Naresh Namani <i className="username">@nareshnamai</i>
                </h2>
                <p style={{ padding: "1rem 0" }}>
                
                  <Icon name="work" /> Working in Tcs
                </p>
                <p>2+ working Years</p>

                <div className="download">
                  <a
                    href="https://api.whatsapp.com/send?phone=+91 8686506505&text=Hello, how are you ?"
                    target="_blank"
                    class="button "
                  >
                    <Icon name="whatsapp" />
                  </a>

                  <a
                    download=""
                    href="assets/pdf/nareshnamani.pdf"
                    class="button "
                  >
                    <Icon name="download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="profile__container grid">
          <div class="profile__data">
            <div class="profile__border">
              <div class="profile__perfil">
                <div
                  className="about__pic"
                  style={{ width: "100%", height: "100%" }}
                ></div>
              </div>
            </div>

            <h2 class="profile__name">Naresh Namani</h2>
            <i className="username">@nareshnamai</i>
            <p style={{ padding: "1rem 0" }}>
             
              <Icon name="work" /> Working in Tcs
            </p>
          </div>

          <div class="profile__info grid">
            <div class="profile__info-group">
              <h3 class="profile__info-number">3</h3>
              <p class="profile__info-description">
                Years of <br /> work
              </p>
            </div>
          </div>

          <div class="profile__buttons">
            <a download="" href="assets/pdf/Naresh-Namani.pdf" class="button">
              Download CV <i class="ri-download-line"></i>
            </a>

            <div class="profile__buttons-small">
              <a
                href="https://api.whatsapp.com/send?phone=+91 8686506505&text=Hello, more information!"
                target="_blank"
                class="button button__small button_whatsapp"
              >
                <i class="ri-whatsapp-line">
                 
                  <Icon name="whatsapp" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main class="main">
        <section class="filters container">
          <ul class="filters__content">
            <button
              class={`filters__button ${
                tabActive === "projects" && "filter-tab-active"
              }`}
              data-target="#projects"
              onClick={() => setTabStatus("projects")}
            >
              UI Designs
            </button>
            <button
              class={`filters__button ${
                tabActive === "skills" && "filter-tab-active"
              }`}
              data-target="#skills"
              onClick={() => setTabStatus("skills")}
            >
              Skills
            </button>
          </ul>

          <div class="filters__sections">
            <div
              class={`projects__content grid  ${
                tabActive === "projects" && "filters__active"
              }`}
              data-content
              id="projects"
            >
              <div class="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  class="projects__img"
                />

                <div class="projects__modal">
                  <div>
                    {/* <span class="projects__subtitle">Web</span> */}
                    <h3 class="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      class="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </div>

              <article class="projects__card" >
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14394174/media/5c374442cad32ccd3999245c67b4402d.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  class="projects__img"
                  data-aos="zoom-in"
                />

                <div class="projects__modal">
                <div>
                    {/* <span class="projects__subtitle">Web</span> */}
                    <h3 class="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      class="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>

              <article class="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/a13c230eb4ed979c046febe5229cc60b.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  class="projects__img"
                />

                <div class="projects__modal">
                <div>
                    {/* <span class="projects__subtitle">Web</span> */}
                    <h3 class="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      class="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>

              <article class="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14394174/media/73f475e230b3501b2683d7fdd7d4c200.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  class="projects__img"
                />

                <div class="projects__modal">
                <div>
                    {/* <span class="projects__subtitle">Web</span> */}
                    <h3 class="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      class="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>

              <article class="projects__card" data-aos="zoom-in">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/a13c230eb4ed979c046febe5229cc60b.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  class="projects__img"
                />

                <div class="projects__modal">
                <div>
                    {/* <span class="projects__subtitle">Web</span> */}
                    <h3 class="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      class="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div
              class={`skills__content grid  ${
                tabActive === "skills" && "filters__active"
              }`}
              data-content
              id="skills"
            >
              <div class="skills__area">
                <h3 class="skills__title">Frontend Developer</h3>

                <div class="skills__box">
                  <div class="skills__group">
                    <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">HTML</h3>
                        <span class="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">React</h3>
                        <span class="skills__level">Intermediate</span>
                      </div>
                    </div>
                    

                    <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">JavaScript</h3>
                        <span class="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div class="skills__group">
                  <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">CSS</h3>
                        <span class="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">Bootstrap</h3>
                        <span class="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">Git</h3>
                        <span class="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skills__area">
                <h3 class="skills__title">Backend Developer</h3>

                <div class="skills__box">
                  <div class="skills__group">
                   

                  <div class="skills__data">
                      
                      <div>
                        <h3 class="skills__name"> 
  Python</h3>
                        <span class="skills__level">Basic</span>
                      </div>
                    </div>

                    <div class="skills__data">

                      <div>
                        <h3 class="skills__name"> Node Js</h3>
                        <span class="skills__level">Intermediate</span>
                      </div>
                    </div>

                  </div>

                  <div class="skills__group">

                  <div class="skills__data">
                      <i class="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 class="skills__name">Firebase</h3>
                        <span class="skills__level">Intermediate</span>
                      </div>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
