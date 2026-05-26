import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <main className="min-h-screen">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="relative selection:bg-primary selection:text-white">
        {/* Abstract Background Elements for Premium Look */}
        <div className="fixed inset-0 z-[-1] bg-background-dark">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]"></div>
        </div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Admin Dashboard route can be added here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
