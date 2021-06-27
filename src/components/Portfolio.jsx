import React from "react";
import Project from "./composables/Project";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <article>
      <h2>This is the Portfolio page</h2>
      <Project wrapper="wrapper-one" />
      <Project wrapper="wrapper-two" />
      <Project wrapper="wrapper-one" />
    </article>
  );
};

export default Portfolio;
