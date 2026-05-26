import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    title: 'Student Results Management System',
    desc: 'Full-stack academic platform with role-based access control supporting 500+ users; implemented secure authentication, data processing APIs, and reporting workflows with comprehensive testing.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'JWT'],
    github: 'https://github.com/ShankarSwarup/StudentResults',
    number: '01'
  },
  {
    title: 'Medical Platform Dashboard',
    desc: 'Multi-tenant RBAC medical platform supporting complex hospital workflows including prescriptions, pharmacy routing, and lab scanning synchronization.',
    tech: ['FastAPI', 'MongoDB', 'React', 'JWT', 'AWS'],
    github: '#',
    number: '02'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label">PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card bg-[#141416] p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300 min-h-[300px] flex flex-col justify-between"
            >
              {/* Background Number */}
              <div className="absolute right-4 top-4 text-8xl font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                {project.number}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 pr-16">{project.title}</h3>
                <p className="text-text-muted mb-8 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
