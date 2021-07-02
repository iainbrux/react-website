import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import newTab from '../../img/tab.svg'
import goBack from '../../img/back.svg'

const ProjectNav = ({ github, demo }) => {
  const githubLink = `https://github.com/iainbrux/${github}/`;
  const demoLink = `https://${demo}.iain.biz/`;

  return (
    <ul className="project-nav">
      <Link exact to="/portfolio">
        <li className="go-back"><img src={goBack} alt="new tab icon" className="go-back" /> back</li>
      </Link>
      <a href={githubLink} target="blank">
        <li className="github">github <img src={newTab} alt="new tab icon" /></li>
      </a>
      <a href={demoLink} target="blank">
        <li className="live-demo">demo <img src={newTab} alt="new tab icon" /></li>
      </a>
    </ul>
  );
};

export default ProjectNav;
