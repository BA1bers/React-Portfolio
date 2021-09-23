import React from 'react';
import './App.css';
import Background from "./components/Background"
import Nav from "./components/Nav"
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pageContainer">
      <div className="content-wrap">
        <Nav />
        <Background />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
