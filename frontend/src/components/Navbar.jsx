import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || menuOpen
            ? 'bg-background-dark/95 backdrop-blur-md border-text-muted/10 py-4'
            : 'border-transparent bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg md:text-2xl font-bold tracking-tighter text-primary truncate max-w-[200px] md:max-w-none"
          >
            Jyothi Shankar Swarup Gummala
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="hover:text-text-light transition-colors cursor-pointer"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setIsDark(prev => !prev)}
              className="text-text-muted hover:text-text-light transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 bg-primary text-background-dark font-semibold rounded-md hover:bg-primary/90 transition-all cursor-pointer"
            >
              Resume
            </a>
          </div>

          {/* Mobile right controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsDark(prev => !prev)}
              className="text-text-muted hover:text-text-light transition-colors p-1 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="text-text-muted hover:text-text-light transition-colors p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 w-full z-40 bg-background-dark/95 backdrop-blur-md border-b border-text-muted/10 md:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left py-3 text-text-muted hover:text-text-light hover:bg-text-muted/5 rounded-lg px-3 transition-colors text-sm font-medium cursor-pointer"
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 px-5 py-3 bg-primary text-background-dark font-semibold rounded-md hover:bg-primary/90 transition-all text-center text-sm cursor-pointer"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
