import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

const description = {
  chatroom: 'Project showcasing Vue.js, Firebase BaaS and realtime rendering. This project also includes frameworks like vue-router and firebase-firestore.'
}

const Portfolio = () => {
  return (
    <main>
      <article className="portfolio">
        <h2>Portfolio</h2>
        <Project wrapper="wrapper-one" position="position-left" title="Chatroom" description={description.chatroom}/>
        <Project wrapper="wrapper-two" position="position-right" title="Calculator" />
        <Project wrapper="wrapper-two" position="position-left" title="Blog" />
        <Project wrapper="wrapper-one" position="position-right" title="Sketch" />
      </article>
    </main>
  );
};

export default Portfolio;
