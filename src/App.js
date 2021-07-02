import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/projects/Calculator";
import Blog from './components/projects/Blog'
import Sketch from './components/projects/Sketch'
import Chatroom from './components/projects/Chatroom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Main.css";

const App = () => {
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
          <Route path="/portfolio/blog" component={Blog} />
          <Route path="/portfolio/sketch" component={Sketch} />
          <Route path="/portfolio/chatroom" component={Chatroom} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
