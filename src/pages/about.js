import { Link } from "gatsby";
import * as React from "react";
import Icon from "../components/Icons/Icon";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import TagIcon from "../components/Icons/TagIcons";

const AboutPage = (props) => {
  const [tabActive, setTabStatus] = React.useState("projects");

  return (
    <Layout pageTitle="About Naresh Namani" pageName={props.path}>
      <Seo title="About " description={"Get to know about Naresh Namani"} />

      <div className="profile container " style={{ marginTop: "1rem" }}>
        <div className="profile__dev">
          <div className="profile_dev container">
            <div className="profile__border">
              <div className="about__pic"></div>
            </div>

            <div className="profile_desc">
              <div>
                <h2 className="profile__name">
                  Naresh Namani <i className="username">@nareshnamani</i>
                </h2>
                <p className="profile_desc_p">
                  Hey guys, welcome to my Blog page , working in a
                  <Icon name="work" /> Tata Consultancy Services as a Software
                  Engineer with
                  <strong> 2+ years of Experience</strong>. This website helps
                  you to learn programming languages
                </p>
                <div className="download">
                  <a
                    href="https://api.whatsapp.com/send?phone=+91 8686506505&text=Hello, how are you ?"
                    target="_blank"
                    className="button "
                  >
                    <Icon name="whatsapp" />
                  </a>

                  <a
                    download=""
                    href="assets/pdf/nareshnamani.pdf"
                    className="button "
                  >
                    <Icon name="download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <div
                  className="about__pic"
                  style={{ width: "100%", height: "100%" }}
                ></div>
              </div>
            </div>

            <h2 className="profile__name">Naresh Namani</h2>
          </div>

          <div className="profile__info grid">
            <div
              className="profile__info-group"
              style={{ paddingBottom: "1rem" }}
            >
              <p className="profile_desc_p">
                Hey guys, welcome to my Blog page , working in a{" "}
                <Icon name="work" /> Tata Consultancy Services as a Software
                Engineer with
                <strong> 2+ years of Experience</strong>. This website helps you
                to learn programming languages
              </p>
              {/*<h3 className="profile__info-number">3</h3>
              <p className="profile__info-description">
                Years of <br /> work
  </p> */}
            </div>
          </div>

          <div className="profile__buttons">
            <a
              download=""
              href="assets/pdf/Naresh-Namani.pdf"
              className="button downloadCv"
            >
              Download CV <i className="ri-download-line"></i>
            </a>

            <div className="profile__buttons-small">
              <a
                href="https://api.whatsapp.com/send?phone=+91 8686506505&text=Hello, more information!"
                target="_blank"
                className="button button__small button_whatsapp"
              >
                <i className="ri-whatsapp-line">
                  <Icon name="whatsapp" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <section className="filters container">
          <ul className="filters__content">
            <button
              className={`filters__button ${
                tabActive === "projects" && "filter-tab-active"
              }`}
              data-target="#projects"
              onClick={() => setTabStatus("projects")}
            >
              UI Designs
            </button>
            <button
              className={`filters__button ${
                tabActive === "skills" && "filter-tab-active"
              }`}
              data-target="#skills"
              onClick={() => setTabStatus("skills")}
            >
              Skills
            </button>
          </ul>

          <div className="filters__sections">
            <div
              className={`projects__content grid  ${
                tabActive === "projects" && "filters__active"
              }`}
              data-content
              id="projects"
            >
              <div className="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  className="projects__img"
                />

                <div className="projects__modal">
                  <div>
                    {/* <span className="projects__subtitle">Web</span> */}
                    <h3 className="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      className="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </div>

              <article className="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14394174/media/5c374442cad32ccd3999245c67b4402d.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  className="projects__img"
                  data-aos="zoom-in"
                />

                <div className="projects__modal">
                  <div>
                    {/* <span className="projects__subtitle">Web</span> */}
                    <h3 className="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      className="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/a13c230eb4ed979c046febe5229cc60b.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  className="projects__img"
                />

                <div className="projects__modal">
                  <div>
                    {/* <span className="projects__subtitle">Web</span> */}
                    <h3 className="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      className="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14394174/media/73f475e230b3501b2683d7fdd7d4c200.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  className="projects__img"
                />

                <div className="projects__modal">
                  <div>
                    {/* <span className="projects__subtitle">Web</span> */}
                    <h3 className="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      className="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card" data-aos="zoom-in">
                <img
                  src="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/a13c230eb4ed979c046febe5229cc60b.jpg?compress=1&resize=1200x900&vertical=top"
                  alt=""
                  className="projects__img"
                />

                <div className="projects__modal">
                  <div>
                    {/* <span className="projects__subtitle">Web</span> */}
                    <h3 className="projects__title">Payment Site</h3>
                    <a
                      href="https://cdn.dribbble.com/users/6205537/screenshots/14398869/media/321a3fe4165f1622161808b2d8828b05.jpg?compress=1&resize=1200x900&vertical=top"
                      target={"_blank"}
                      className="projects__button button button__small"
                    >
                      <Icon name="external_link" />
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div
              className={`skills__content grid  ${
                tabActive === "skills" && "filters__active"
              }`}
              data-content
              id="skills"
            >
              <div className="skills__area">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills__area">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div>
                        <h3 className="skills__name"> Node Js</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
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
