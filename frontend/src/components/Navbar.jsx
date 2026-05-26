import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? 'bg-background-dark/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
          Jyothi Shankar Swarup Gummala
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <button className="text-text-muted hover:text-white transition-colors">
            <Sun size={18} />
          </button>
          <a href="/resume.pdf" download className="px-5 py-2 bg-primary text-background-dark font-semibold rounded-md hover:bg-primary/90 transition-all">
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
