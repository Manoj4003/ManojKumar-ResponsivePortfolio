import React from "react";
import "./Skills.css";

import Html from '../../assets/Html.jpg'
import Css from '../../assets/Css.jpg'
import JavaScript from  '../../assets/JavaScript.jpg'
import Bootstrap from '../../assets/Bootstrap.jpg'
import ReactImg from '../../assets/ReactImg.jpg'
import Java from  '../../assets/Java.jpg'
import Github from  '../../assets/Github.jpg'
import sqlimg from  '../../assets/sqlimg.jpg'

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills-section mt-5">
        <h2 className="mb-5 Skills">My <span>Skills</span></h2>
        <div className="skills-slider">
          <div className="skills-track">
            {/* 1st Set */}
            <div className="skill-card">
              <img src={Html} className="skill-icon" alt="HTML" />
              <h4>HTML</h4>
            </div>
            <div className="skill-card">
              <img src={Css} className="skill-icon" alt="CSS" />
              <h4>CSS</h4>
            </div>
            <div className="skill-card">
              <img src={JavaScript} className="skill-icon" alt="JavaScript" />
              <h4>JavaScript</h4>
            </div>
            <div className="skill-card">
              <img src={Bootstrap} className="skill-icon" alt="Bootstrap" />
              <h4>Bootstrap</h4>
            </div>
            <div className="skill-card">
              <img src={ReactImg} className="skill-icon" alt="React" />
              <h4>React</h4>
            </div>

            <div className="skill-card">
              <img src={sqlimg} className="skill-icon" alt="React" />
              <h4>SQL</h4>
            </div>

            <div className="skill-card">
              <img src={Java} className="skill-icon" alt="Java" />
              <h4>Java</h4>
            </div>

            <div className="skill-card">
              <img src={Github} className="skill-icon" alt="GitHub" />
              <h4>GitHub</h4>
            </div>

            {/* Duplicate set */}
            <div className="skill-card">
              <img src={Html} className="skill-icon" alt="HTML" />
              <h4>HTML</h4>
            </div>
            <div className="skill-card">
              <img src={Css} className="skill-icon" alt="CSS" />
              <h4>CSS</h4>
            </div>
            <div className="skill-card">
              <img src={JavaScript} className="skill-icon" alt="JavaScript" />
              <h4>JavaScript</h4>
            </div>
            <div className="skill-card">
              <img src={Bootstrap} className="skill-icon" alt="Bootstrap" />
              <h4>Bootstrap</h4>
            </div>
            <div className="skill-card">
              <img src={ReactImg} className="skill-icon" alt="React" />
              <h4>React</h4>
            </div>
            <div className="skill-card">
              <img src={sqlimg} className="skill-icon" alt="React" />
              <h4>SQL</h4>
            </div>
            <div className="skill-card">
              <img src={Java} className="skill-icon" alt="Java" />
              <h4>Java</h4>
            </div>

            <div className="skill-card">
              <img src={Github} className="skill-icon" alt="GitHub" />
              <h4>GitHub</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
