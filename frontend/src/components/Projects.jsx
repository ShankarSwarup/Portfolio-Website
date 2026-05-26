import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    title: 'Medical Platform',
    desc: 'Multi-tenant RBAC medical platform with 6 user roles, 22 API endpoints, and 6 role-specific dashboards covering prescriptions, pharmacy, lab scans, and appointments.',
    bullets: [
      'Developed async FastAPI server-side layer powered by Motor (MongoDB) and JWT/OAuth2 auth, enforcing RBAC via require_role() across 22 secured routes.',
      'Shipped a multi-step appointment booking flow and EHR export, reducing patient onboarding time by 50%.',
      'Delivered a SuperAdmin analytics dashboard tracking metrics across 7 MongoDB collections, giving 6 hospital admins organisation-wide operational visibility.',
    ],
    tech: ['FastAPI', 'MongoDB', 'Motor', 'React', 'JWT', 'OAuth2', 'AWS'],
    github: null,
    number: '01',
  },
  {
    title: 'Student Results Management System',
    desc: 'Academic platform with role-based access control, supporting 500+ users; implemented secure authentication, REST APIs, and reporting workflows.',
    bullets: [],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'JWT'],
    github: 'https://github.com/ShankarSwarup/StudentResults',
    number: '02',
  },
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
          <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">
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
              className="card p-8 relative overflow-hidden group hover:border-text-muted/30 transition-all duration-300 flex flex-col"
            >
              <div className="absolute right-4 top-4 text-8xl font-bold text-text-muted/10 select-none pointer-events-none group-hover:text-text-muted/20 transition-colors">
                {project.number}
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-text-light pr-12">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-text-muted hover:text-primary transition-colors mt-1"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                <p className="text-text-muted mb-4 leading-relaxed">{project.desc}</p>

                {project.bullets.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-text-muted text-sm">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tech.map(t => (
                    <span key={t} className="pill">{t}</span>
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
