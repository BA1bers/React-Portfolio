import React from 'react';
import './App.css';
import Background from "./components/Background"
import Nav from "./components/Nav"
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Background />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
