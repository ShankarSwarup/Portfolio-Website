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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-light">
            Building systems that <span className="text-primary">scale</span>
          </h2>

          <div className="text-text-muted text-lg leading-relaxed max-w-3xl mb-16">
            <p>
              Senior Full Stack Engineer with 3+ years designing and shipping scalable applications
              using Node.js, TypeScript, FastAPI, React, Angular, and React Native. Delivered a
              billing engine processing 1,000+ orders, multi-tenant RBAC platforms, and reliable
              RESTful services. Proficient in MongoDB performance tuning, AWS serverless architecture
              (Lambda, SQS, S3, EventBridge), and fault-tolerant system design.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '10K+', label: 'Concurrent Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '100+', label: 'APIs Built' },
            ].map(({ value, label }) => (
              <div key={label} className="card p-6 text-center flex flex-col items-center justify-center">
                <h3 className="text-4xl font-bold text-primary mb-2">{value}</h3>
                <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
