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
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">Lorem Ipsum dolores</p>
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
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Zwift</div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2018 - April 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Manager</h3>
              <div className="subheading mb-3">Double Down Interactive</div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Cricket Moon Media</div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Owner</h3>
              <div className="subheading mb-3">Simian Labs</div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
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
            I will occasionally attempt some alpine climbing & can be talked into snowboarding.
          </p>
          <p className="mb-0">
            When at home I enjoy cooking, gardening, live music, & sci-fi novels.
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
            Maybe one day...
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
