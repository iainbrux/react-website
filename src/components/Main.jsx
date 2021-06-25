import React from 'react'
import '../styles/Main.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'

const Main = ({ display }) => {
  return (
    <main>
      <article>
        { display === 'contact' ? <Contact /> 
        : display === 'about' ? <About />
        : <Home /> }
      </article>
    </main>
  )
}

export default Main