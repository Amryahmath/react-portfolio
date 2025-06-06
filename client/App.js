import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './main.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Education />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
