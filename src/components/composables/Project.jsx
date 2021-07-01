import React from "react";
import blob from '../../img/blob.svg'
import blob2 from '../../img/blob2.svg'

const Project = ({ wrapper, description }) => {
  /* const blobs = [blob, blob2];

  const randomBlob = () => {
    const random = Math.floor(Math.random() * 2)
    return blobs[random]
  } */

  return (
    <div className="project">
      <div className={wrapper}>
        <img src="https://via.placeholder.com/800x350" alt="" />
        <div className={description}>
          {/* <img src={randomBlob()} alt="" className="blob" /> */}
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
