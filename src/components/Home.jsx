import React from "react";
import memoji from "../img/memoji.png";
import '../styles/Home.css'

const Home = () => {
  // Moving blobs - to be implemented as a later feature for parallax
  // const moveBlobs = (e) => {
  //   const blobs = document.querySelector(".blobs");
  //   blobs.style.setProperty("--x", -e.offsetX + "px");
  //   blobs.style.setProperty("--y", -e.offsetY + "px");
  //   console.log('Mouse move')
  // }

  return (
    <main>
      <article className="home">
        <div className="glass">
          <img src={memoji} alt="A self portrait of Iain" className="headshot" />
          <h2>Hello, I'm Iain 👋🏼</h2>
          <h3>A self-taught developer 🧑🏼‍💻</h3>
          <p>
            I've been self taught for just over a year now and I
            specialise in JavaScript with the{" "}
            MERN technology stack; consisting of React.js,
            Express, MongoDB and Node.js. I'm constantly adapting and
            learning new technologies and I'm also an{" "}
            AWS Certified Cloud Practitioner.
          </p>
          <br />
          <p>
            I'm a pizza type of guy, and my favourite hobbies include esports, golf, cryptocurrency and pc gaming.
          </p>
          <br />
          <p>
            Here, you'll find my portfolio, a bit about me and how to get in touch with me.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Home;
