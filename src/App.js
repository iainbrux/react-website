import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/composables/Calculator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Main.css";

const App = () => {
  const [display, setDisplay] = useState("home");

  /* const scrollFunction = () => {
   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      const header = document.querySelector('header');
      header.querySelector('h1').style.margin = "0px 20px"
      header.style.height = "50px"
      // document.querySelector('logo').style.padding = "25px";
    } 
  }

  window.addEventListener('scroll', () => scrollFunction()) */

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/portfolio/calculator" component={Calculator} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
