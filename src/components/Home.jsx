import React, { useEffect } from "react";
import portrait from "../img/head.jpg";
import "../styles/Home.css";
import blob1 from "../img/blob1.png";

const Home = () => {
  useEffect(() => {
    const article = document.querySelector("article");
    const blobs = document.querySelector(".blobs");

    article.addEventListener("mousemove", (e) => {
      blobs.style.setProperty("--x", -e.offsetX + "px");
      blobs.style.setProperty("--y", -e.offsetY + "px");
    });
  }, []);

  return (
    <article className="article">
      <img src={portrait} alt="A self portrait of Iain" className="headshot" />
      <img src={blob1} alt="" className="blobs" />
      <h2>This is the Home page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        iure sit recusandae. Praesentium nam ipsa consequuntur adipisci
        blanditiis, repudiandae asperiores laboriosam vitae. Explicabo
        voluptates labore vitae assumenda temporibus. Aliquam.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        iure sit recusandae. Praesentium nam ipsa consequuntur adipisci
        blanditiis, repudiandae asperiores laboriosam vitae. Explicabo
        voluptates labore vitae assumenda temporibus. Aliquam.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        iure sit recusandae. Praesentium nam ipsa consequuntur adipisci
        blanditiis, repudiandae asperiores laboriosam vitae. Explicabo
        voluptates labore vitae assumenda temporibus. Aliquam.
      </p>
    </article>
  );
};

export default Home;
