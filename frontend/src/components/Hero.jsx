import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 px-6 overflow-hidden bg-background-dark">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 140, links: { opacity: 0.5 } } } },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 0.5, straight: false },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-text-muted tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Jyothi Shankar Swarup <br/>
            <span className="text-primary">Gummala</span>
          </h1>
          
          <div className="h-8 md:h-10 text-lg md:text-2xl font-mono text-primary mt-4">
            <TypeAnimation
              sequence={[
                'Senior Full Stack Engineer',
                1000,
                'React & Node.js Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto pt-4 font-light">
            Crafting scalable distributed systems <br className="hidden md:block"/>
            with <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">TypeScript</span> & <span className="text-white font-medium">AWS</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 pt-10"
        >
          <a href="#contact" className="px-8 py-3 bg-primary text-background-dark font-medium rounded-md hover:bg-primary/90 transition-all text-sm">
            Get in Touch
          </a>
          <a href="#projects" className="px-8 py-3 bg-transparent border border-white/10 text-white rounded-md font-medium hover:bg-white/5 transition-all text-sm">
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 pt-12"
        >
          <a href="https://github.com/ShankarSwarup" target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-md hover:border-primary/50 hover:text-primary transition-colors text-text-muted">
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/jyothi-shankar-swarup-gummala-b600ba1aa/" target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-md hover:border-primary/50 hover:text-primary transition-colors text-text-muted">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="mailto:shankargummala58@gmail.com" className="p-3 border border-white/10 rounded-md hover:border-primary/50 hover:text-primary transition-colors text-text-muted">
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
