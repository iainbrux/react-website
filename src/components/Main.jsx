import React from 'react'
import '../styles/Main.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'

const Main = ({ display }) => {
  return (
    <main>
      { display === 'contact' ? <Contact /> 
      : display === 'about' ? <About />
      : display === 'portfolio' ? <Portfolio />
      : <Home /> } 
    </main>
  )
}

export default Main