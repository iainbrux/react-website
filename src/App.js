import React, { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [display, setDisplay] = useState('home');

  return (
    <div>
      <Header setDisplay={setDisplay} />
      <Main display={display} />
      <Footer />
    </div>
  )
}

export default App;
