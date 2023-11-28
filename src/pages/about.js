import * as React from "react";
import Icon from "../components/Icons/Icon";
import Seo from "../components/Seo";
import Layout from "../components/layout";
import CovidWebApp from "../images/covidwebapp.png";

import CovidMobileApp from "../images/covidmobileapp.png";
import FinanceApp from "../images/financetracker.png";

const AboutPage = (props) => {
  const [tabActive, setTabStatus] = React.useState("skills");

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
                  Enthusiastic Software Engineer with 2+ years of experience at{" "}
                  <Icon name="work" /> Tata Consultancy Services, passionate
                  about sharing programming knowledge and empowering aspiring
                  developers through this blog.
                </p>
                <div className="download">
                  <a
                    href="https://api.whatsapp.com/send?phone=+91 8686506505&text=Hello, how are you ?"
                    target="_blank"
                    className="button "
                  >
                    <Icon name="whatsapp" strokeWidth="1 " />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naresh-namani/"
                    target="_blank"
                    className="button "
                  >
                    <Icon
                      name="linked_in"
                      strokeWidth="1"
                      viewBox="0 0 72 72"
                    />
                  </a>

                  <a
                    download=""
                    href="assets/pdf/nareshnamani.pdf"
                    className="button "
                  >
                    <Icon name="download" strokeWidth="1" />
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
                Enthusiastic Software Engineer with 2+ years of experience at{" "}
                <Icon name="work" /> Tata Consultancy Services, passionate about
                sharing programming knowledge and empowering aspiring developers
                through this blog.
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
            <a
              href="https://www.linkedin.com/in/naresh-namani/"
              target="_blank"
              className="button "
            >
              <Icon name="linked_in" strokeWidth="1" viewBox="0 0 72 72" />
            </a>

            <div className="profile__buttons-small">
              <a
                href="https://api.whatsapp.com/send?phone=+91 8686506505&text=Hello, more information!"
                target="_blank"
                className="button button__small button_whatsapp"
              >
                <i className="ri-whatsapp-line">
                  <Icon name="whatsapp" strokeWidth="1" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile container " style={{ marginTop: "1rem" }}>
        <div className="profile__dev">
          <div className="profile_dev container">
            <div className="profile_desc">
              <div>
                <h2 className="profile__name">Education</h2>
                <p className="profile_desc_p">
                  <li>
                    Completed Bachelors in Computer Science at Vaagdevi
                    Engineering College , Warangal.
                  </li>
                </p>
                <p className="profile_desc_p">
                  <li>
                    Completed Diploma in Government Polytechnic
                    College,Warangal.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__container grid">
          <div className="profile__info grid">
            <div
              className="profile__info-group"
              style={{ paddingBottom: "1rem" }}
            >
              <div>
                <h2 className="profile__name" style={{ textAlign: "left" }}>
                  Education
                </h2>
                <p className="profile_desc_p">
                  <li>
                    Completed Bachelors in Computer Science at Vaagdevi
                    Engineering College , Warangal.
                  </li>
                </p>
                <p className="profile_desc_p">
                  <li>
                    Completed Diploma in Government Polytechnic
                    College,Warangal.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <section className="filters container">
          <ul className="filters__content">
            <button
              className={`filters__button ${
                tabActive === "skills" && "filter-tab-active"
              }`}
              data-target="#skills"
              onClick={() => setTabStatus("skills")}
            >
              Skills
            </button>
            <button
              className={`filters__button ${
                tabActive === "projects" && "filter-tab-active"
              }`}
              data-target="#projects"
              onClick={() => setTabStatus("projects")}
            >
              Projects
            </button>
            <button
              className={`filters__button ${
                tabActive === "designs" && "filter-tab-active"
              }`}
              data-target="#designs"
              onClick={() => setTabStatus("designs")}
            >
              UI Designs
            </button>
          </ul>

          <div className="filters__sections">
            <div
              className={` grid  ${
                tabActive === "skills" && "filters__active"
              }`}
              data-content
              id="skills"
            >
              <div className="skills__area">
                <p className="skills_text">
                  <strong className="skills__title__alt">
                    FRONTEND DEVELOPMENT
                  </strong>
                  | React Js | JavaScript | Bootstrap | HTML | CSS
                </p>
                <p className="skills_text">
                  <strong className="skills__title__alt">
                    BACKEND DEVELOPMENT
                  </strong>
                  | Java | Spring Boot | Restfull API
                </p>

                <p className="skills_text">
                  <strong className="skills__title__alt">
                    MOBILE DEVELOPMENT
                  </strong>
                  | React Native
                </p>

                <p className="skills_text">
                  <strong className="skills__title__alt">MISCELLANEOUS</strong>|
                  Data Structures | System Design | Problem Solving
                </p>
              </div>
            </div>
            {/* 
            
            <div
              className={`skills__content grid  ${
                tabActive === "skills" && "filters__active"
              }`}
              data-content
              id="skills"
            >
              <div className="skills__area">
                <h3 className="skills__title">Frontend Development</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">
                          <li>React</li>
                        </h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">
                          <li>JavaScript</li>
                        </h3>
                         <span className="skills__level">Intermediate</span>}
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>
                      <div>
                        <h3 className="skills__name">
                          <li>HTML</li>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">
                          <li>CSS</li>
                        </h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">
                          <li>Bootstrap</li>
                        </h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">
                          <li>Git</li>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills__area">
                <h3 className="skills__title">Backend Development</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <div>
                        <h3 className="skills__name">
                          <li>Java ,Spring Boot</li>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">
                          <li>Firebase</li>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills__area">
                <h3 className="skills__title">MOBILE Development</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <div>
                        <h3 className="skills__name">
                          <li>React Native </li>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills__area">
                <h3 className="skills__title">Other </h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <div>
                        <h3 className="skills__name">Data Structures</h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div>
                        <h3 className="skills__name">System Design</h3>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Problem Solving </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            */}
            <div
              className={`projects__content grid  ${
                tabActive === "projects" && "filters__active"
              }`}
              data-content
              id="projects"
            >
              <div className="projects__group">
                <article className="projects__card">
                  <img src={FinanceApp} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      {/* <span className="projects__subtitle">Web</span> */}
                      <h3 className="projects__title">Finance Tracker App</h3>
                      <a
                        href={"https://github.com/namaninaresh/FinanceTracker"}
                        target={"_blank"}
                        className="projects__button button button__small"
                      >
                        <Icon name="external_link" />
                      </a>
                    </div>
                  </div>
                </article>
                <div className="projects__details">
                  <h3>Finance Tracker Mobile App</h3>
                  <p className="projects__description">
                    A powerful yet user-friendly finance tracker designed to
                    simplify your expense management. With a focus on simplicity
                    and cleanliness, our application empowers you to
                    effortlessly track all your expenses, ensuring financial
                    transparency and control.Developed in React Native (2023)
                  </p>
                  <li>Add or Remove Monthly Expenses transactions</li>
                  <li>Automatic Transactions,Bills Reading through SMS</li>
                  <li>Automatic Bank Balance Update</li>
                  <li>Customizable Books </li>
                  <li>Secure and Private </li>
                </div>
              </div>
              <div className="projects__group">
                <article className="projects__card">
                  <img
                    src={CovidWebApp}
                    alt=""
                    className="projects__img"
                    data-aos="zoom-in"
                  />

                  <div className="projects__modal">
                    <div>
                      {/* <span className="projects__subtitle">Web</span> */}
                      <h3 className="projects__title">Covid Web Application</h3>

                      <a
                        href="https://namaninaresh.github.io/CovidAppReact/"
                        target={"_blank"}
                        className="projects__button button button__small"
                      >
                        <Icon name="external_link" />
                      </a>
                    </div>
                  </div>
                </article>
                <div className="projects__details">
                  <h3>Covid Web Application</h3>
                  <p className="projects__description">
                    This React.js-based web application serves as a
                    comprehensive platform for tracking and visualizing COVID-19
                    cases, offering detailed insights into both national and
                    state-level statistics. Designed with user accessibility in
                    mind, it provides a user-friendly interface to navigate and
                    comprehend pandemic data.Developed in React js (2020)
                  </p>
                  <li>Real time updates</li>
                  <li>
                    National and State Wise Covid Cases tracking with other
                    details
                  </li>
                  <li>Precautions</li>
                  <li>User friendly </li>
                </div>
              </div>
              <div className="projects__group">
                <article className="projects__card">
                  <img
                    src={CovidMobileApp}
                    alt=""
                    className="projects__img"
                    data-aos="zoom-in"
                  />

                  <div className="projects__modal">
                    <div>
                      {/* <span className="projects__subtitle">Web</span> */}
                      <h3 className="projects__title">Covid Mobile App</h3>
                      <a
                        href={CovidMobileApp}
                        target={"_blank"}
                        className="projects__button button button__small"
                      >
                        <Icon name="external_link" />
                      </a>
                    </div>
                  </div>
                </article>
                <div className="projects__details">
                  <h3>Covid Mobile App</h3>
                  <p className="projects__description">
                    Our COVID mobile application stands as a beacon of
                    information and assistance during these challenging times.
                    It provides real-time updates on global, national, and
                    state-wise COVID-19 cases, ensuring users are well-informed
                    about the evolving situation.Developed in React js (2021)
                  </p>
                  <li>Global,National,State Wise Cases Display.</li>
                  <li>Telangana District Specific Information </li>
                  <li>Telangana Hospitals List with Real Time Data</li>
                  <li>
                    Precautions, Symptoms, Covid Fact vs Mysts ,Covid History
                    details
                  </li>
                  <li>Risk Scanner Test</li>
                  <li>More information...</li>
                </div>
              </div>
            </div>
            <div
              className={`projects__content grid  ${
                tabActive === "designs" && "filters__active"
              }`}
              data-content
              id="designs"
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
                    <h3 className="projects__title">
                      UPSKILL - Learning Portal UI - 1
                    </h3>
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
                    <h3 className="projects__title">Notes App UI - 1</h3>
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
                    <h3 className="projects__title">
                      UPSKILL - Learning Portal UI - 2
                    </h3>
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
                    <h3 className="projects__title">Notes App UI - 2</h3>
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
                    <h3 className="projects__title">
                      UPSKILL - Learning Portal UI - 3
                    </h3>
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
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
