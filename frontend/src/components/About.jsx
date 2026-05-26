import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">ABOUT</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Building systems that <span className="text-primary">scale</span>
          </h2>
          
          <div className="text-text-muted text-lg leading-relaxed max-w-3xl mb-16">
            <p>
              Senior Full Stack Engineer with 3+ years of experience owning end-to-end system design and building scalable backend systems using Node.js and TypeScript. Built a real-time WebSocket platform supporting 10,000+ concurrent users, a billing engine processing 1,000+ orders, and reliable RESTful services with 99.9% uptime. Strong in distributed systems, MongoDB performance tuning, Redis caching strategies, and AWS serverless architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center flex flex-col items-center justify-center border-white/5 bg-[#141416]">
              <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">Years Experience</p>
            </div>
            <div className="card p-6 text-center flex flex-col items-center justify-center border-white/5 bg-[#141416]">
              <h3 className="text-4xl font-bold text-primary mb-2">10K+</h3>
              <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">Concurrent Users</p>
            </div>
            <div className="card p-6 text-center flex flex-col items-center justify-center border-white/5 bg-[#141416]">
              <h3 className="text-4xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">Uptime</p>
            </div>
            <div className="card p-6 text-center flex flex-col items-center justify-center border-white/5 bg-[#141416]">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">APIs Built</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
