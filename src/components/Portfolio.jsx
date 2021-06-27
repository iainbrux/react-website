import React from "react";
import Project from "./composables/Project";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <article>
      <h2>This is the Portfolio page</h2>
      <Project wrapper="wrapper-one" description="description-left" />
      <Project wrapper="wrapper-two" description="description-right" />
      <Project wrapper="wrapper-one" description="description-left" />
    </article>
  );
};

export default Portfolio;
