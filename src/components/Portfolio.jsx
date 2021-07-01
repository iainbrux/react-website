import React from "react";
import { Link } from "react-router-dom";
import Project from "./composables/Project";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <main>
      <article className="portfolio">
        <h2>This is the Portfolio page</h2>
        <Link to="/portfolio/calculator">
          <Project wrapper="wrapper-one" description="description-left" />
        </Link>
        <Project wrapper="wrapper-two" description="description-right" />
        <Project wrapper="wrapper-one" description="description-left" />
      </article>
    </main>
  );
};

export default Portfolio;
