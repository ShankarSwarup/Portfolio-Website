import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-text-muted border-t border-white/5 bg-background-dark">
      <p>&copy; {new Date().getFullYear()} Jyothi Shankar Swarup Gummala. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
