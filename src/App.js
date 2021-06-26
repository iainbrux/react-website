import React, { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [display, setDisplay] = useState('portfolio');

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
    <div>
      <Header setDisplay={setDisplay} />
      <Main display={display} />
      <Footer />
    </div>
  )
}

export default App;
