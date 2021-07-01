import React from "react";
// import portrait from "../img/head.jpg";
import "../styles/Home.css";
// import blob1 from "../img/blob1.png";

const Home = () => {
  // Moving blobs - to be implemented as a later feature for parallax
  // const moveBlobs = (e) => {
  //   const blobs = document.querySelector(".blobs");
  //   blobs.style.setProperty("--x", -e.offsetX + "px");
  //   blobs.style.setProperty("--y", -e.offsetY + "px");
  //   console.log('Mouse move')
  // }

  return (
    <article className="home">
      {/* <img src={portrait} alt="A self portrait of Iain" className="headshot" /> */}
      {/* <img src={blob1} alt="" className="blobs" /> */}
      <h2>Hello there, I'm Iain.</h2>
      <h3>And I'm a self-taught software developer.</h3>
      <div className="glass">
        <p className="p1">That caught your attention didn't it? 😅</p>
        <br />
        <p>
          I've been a self taught developer now for just over a year. I
          specialise in <strong>JavaScript</strong> with the <strong>MERN</strong> technology stack consisting of React.js, 
          Express, MongoDB and Node.js but I'm constantly adapting and learning new technologies. I'm also
          an <strong>AWS Certified Cloud Practitioner</strong>.
        </p>
        <br />
        <p>
          Here you'll be able to find my portfolio, my personal blog and how to contact me. 
        </p>
      </div>
    </article>
  );
};

export default Home;
