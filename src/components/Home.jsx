import React from "react";
import portrait from "../img/head.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <article>
      <img src={portrait} alt="A self portrait of Iain" />
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
