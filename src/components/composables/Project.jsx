import React from "react";

const Project = ({ wrapper, description }) => {
  return (
    <div className="project">
      <div className={wrapper}>
        <img src="https://via.placeholder.com/800x350" alt="" />
        <div className={description}>
          <h3>My project</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nulla iure sit recusandae. Praesentium nam ipsa consequuntur
            adipisci blanditiis, repudiandae asperiores laboriosam vitae.
            Explicabo voluptates labore vitae assumenda temporibus. Aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
