import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const PARTICLE_COUNT = 60;
const LINK_DISTANCE = 150;

const makeParticle = (w, h) => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: (Math.random() - 0.5) * 0.6,
  vy: (Math.random() - 0.5) * 0.6,
  r: Math.random() * 1.5 + 0.5,
});

const moveParticle = (p, w, h) => {
  p.x += p.vx;
  p.y += p.vy;
  if (p.x < 0 || p.x > w) p.vx *= -1;
  if (p.y < 0 || p.y > h) p.vy *= -1;
};

const drawDots = (ctx, particles, color) => {
  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
};

const drawLinks = (ctx, particles, linkBase, isLight) => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
      if (dist < LINK_DISTANCE) {
        const alpha = (isLight ? 0.25 : 0.12) * (1 - dist / LINK_DISTANCE);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${linkBase},${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
};

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () =>
      makeParticle(canvas.width, canvas.height)
    );

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLight = document.documentElement.classList.contains('light');
      const dotColor = isLight ? 'rgba(6,182,212,0.7)' : 'rgba(255,255,255,0.5)';
      const linkBase = isLight ? '6,182,212' : '255,255,255';

      for (const p of particles) moveParticle(p, canvas.width, canvas.height);
      drawDots(ctx, particles, dotColor);
      drawLinks(ctx, particles, linkBase, isLight);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 px-6 overflow-hidden bg-background-dark">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-text-muted/20 bg-text-muted/10 text-xs font-mono text-text-muted tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-light leading-tight">
            Jyothi Shankar Swarup <br />
            <span className="text-primary">Gummala</span>
          </h1>

          <div className="h-8 md:h-10 text-lg md:text-2xl font-mono text-primary mt-4">
            <TypeAnimation
              sequence={['Senior Full Stack Engineer', 1000, 'React & Node.js Developer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto pt-4 font-light">
            Crafting scalable distributed systems
            <br className="hidden md:block" />
            <span className="text-text-light font-medium">with Node.js, TypeScript &amp; AWS</span>
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
          <a href="#projects" className="px-8 py-3 border border-text-muted/30 text-text-light rounded-md font-medium hover:bg-text-muted/10 transition-all text-sm">
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 pt-12"
        >
          <a href="https://github.com/ShankarSwarup" target="_blank" rel="noreferrer" className="p-3 border border-text-muted/20 rounded-md hover:border-primary/50 hover:text-primary transition-colors text-text-muted">
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/jyothi-shankar-swarup-gummala-b600ba1aa/" target="_blank" rel="noreferrer" className="p-3 border border-text-muted/20 rounded-md hover:border-primary/50 hover:text-primary transition-colors text-text-muted">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="mailto:shankargummala58@gmail.com" className="p-3 border border-text-muted/20 rounded-md hover:border-primary/50 hover:text-primary transition-colors text-text-muted">
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
