import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./composables/Nav";
import Logo from "./composables/Logo";
import "../styles/Header.css";
import darkLogo from "../img/logo.png";
import inverseLogo from "../img/logo-inverse.png";

const Header = () => {
  const [logo, setLogo] = useState(darkLogo);

  const removeClassName = () => {
    document.querySelector(".active").classList.remove("active");
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0; //for Safari
    document.documentElement.scrollTop = 0; //for all others
  };

  const handleClick = (e) => {
    removeClassName();
    scrollToTop();
    e.target.classList.add("active");
  };

  const backToHome = () => {
    removeClassName();
    document.querySelector(".home").classList.add("active");
  };

  const handleMouseOver = (e) => {
    setLogo(inverseLogo);
  };

  const handleMouseOut = (e) => {
    setLogo(darkLogo);
  };

  return (
    <header>
      <Link exact to="/">
        <Logo
          darkLogo={darkLogo}
          inverseLogo={inverseLogo}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
          backToHome={backToHome}
        />
      </Link>
      <Nav handleClick={handleClick} backToHome={backToHome} />
    </header>
  );
};

export default Header;
