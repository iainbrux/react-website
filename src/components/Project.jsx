import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FindOutMore from "./composables/FindOutMore";

const loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla iure sit recusandae. Praesentium nam ipsa consequuntur adipisci blanditiis, repudiandae asperiores laboriosam vitae. Explicabo voluptates labore vitae assumenda temporibus. Aliquam."

const Project = ({ wrapper, position, description, title }) => {
  return (
    <div className="project">
      <div className={wrapper}>
        <img src="https://via.placeholder.com/800x350" alt="" />
        <div className={position}>
          <h3>{title}</h3>
          <p>{description ? description : loremIpsum}</p>
          <Link to={`/portfolio/${title.toLowerCase()}`}>
            <FindOutMore />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
