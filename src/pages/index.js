import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·&nbsp;
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Seasoned developer with decades of experience in backend, frontend, and systems programming.
            <br/>
            Tech Lead, Manager, Mentor, IC
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Engineer - Web</h3>
              <div className="subheading mb-3">Zwift</div>
              <p>Planned & helped steer migration from legacy stack to NextJS / Webpack / React / Node</p>
              <p>Worked with server engineers to integrate web products with backend systems</p>
              <p>Designed & implemented core libraries & services used by web teams (Authentication, CMS, APIs)</p>
              <p>Designed & implemented web apps used by majority of Zwift.com users</p>
              <p>Lead & supported implementation of LiveOps services with AWS, Jenkins, Docker, & Kubernetes</p>
              <p>Collaborated with teams & vendors in globally distributed offices</p>
              <p>Mentored junior developers & interns</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2017 - April 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer, Software Manager</h3>
              <div className="subheading mb-3">Double Down Interactive</div>
              <p>Key role in developing the mobile version of DoubleDown Casino which grew to the top 5 grossing rankings in Apple and Android App Stores
              </p>
              <p>Managed a team of software developers to develop titles and casino features for the DoubleDown Casino mobile application (Hybrid HTML5 / Native)
              </p>
              <p>
                Mentored junior developers in HTML5 game programming technologies and methodologies</p>
              <p>Helped plan and design application-wide feature requirements
              </p>
              <p>Lead architecture reviews of major application subsystems
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2012 - March 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Engineer - Web</h3>
              <div className="subheading mb-3">Cricket Moon Media</div>
              <p>
                Implemented entertainment & educational web apps for large clients
              </p>
              <p>
                Lead developer on large web project. Ruby on Rails / JS for website. Ruby for site support software
              </p>
              <p>Developed & maintained custom APIs to site backend services. Gem & plugin development for 3rd party network service integration. DB schema design, implementation, and optimization.</p>
              <p>Wrote documentation, software diagrams, flowcharts for clients & support team</p>
              <p>
Lead developer for HTML5 game project using custom sprite assets and canvas animations with javascript . Implemented custom javascript audio library for cross-browser support. Worked with producer on meeting client feature requirements
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2010 - July 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Washington</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">1995 - 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages
          </div>
          <ul className="fa-ul">
            <li>
              Backend
              (Node, Python, Ruby, PHP, Java, Scala, SQL)
            </li>
            <li>
              Frontend
              (JS, Elm, CSS3, WebGL)
            </li>
          </ul>

          <div className="subheading mb-3">
            Tools
          </div>
          <ul className="fa-ul">
            <li>git, zsh, tmux, vim, yarn, npm, Webpack, Docker, K8s, redis, nginx</li>
          </ul>

          <div className="subheading mb-3">
            Frameworks &amp; Libraries
          </div>
          <ul className="fa-ul">
            <li>
              Web (NextJS, React, Angular, Bootstrap, Redux, D3.js, RxJS, Ruby On Rails, Express, testing-library, TestCafe)
            </li>
            <li>
              UI
              (Figma, Storybook)
            </li>
            <li>
              Build
                (Webpack, Jenkins, Buildbot, Docker, Kubernetes, AWS, Linux)
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              TDD, Unit & Integration tests
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            My passion is spending time outdoors, especially at the higher altitudes.
            In my free time I enjoy backpacking, rock climbing (trad), and bouldering.
            I will occasionally attempt some alpine climbs  & can be talked into snowboarding.
          </p>
          <p className="mb-0">
            When at home I enjoy cooking, gardening, live music, sci-fi, history, physics, & creative programming.
            <br/>
            I like to learn about & play with cool technologies (like WebGL, AR, VR, & ML).
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
