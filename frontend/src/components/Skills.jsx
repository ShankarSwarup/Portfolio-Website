import React from 'react';
import { motion } from 'framer-motion';

const skillsGroups = [
  {
    title: 'LANGUAGES',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    skills: ['Node.js', 'FastAPI', 'Express.js', 'Angular', 'React', 'React Native'],
  },
  {
    title: 'BACKEND',
    skills: ['REST APIs', 'JWT Authentication', 'OAuth2', 'RBAC', 'Async Processing', 'Event-Driven Architecture'],
  },
  {
    title: 'DATABASES',
    skills: ['MongoDB', 'Aggregation Pipelines', 'Schema Design', 'Indexing', 'Motor (async)'],
  },
  {
    title: 'CLOUD & DEVOPS',
    skills: ['AWS Lambda', 'SQS', 'S3', 'SSM', 'CloudWatch', 'EventBridge', 'Docker', 'CI/CD Pipelines', 'Git', 'GitHub Actions'],
  },
  {
    title: 'TOOLS & INTEGRATIONS',
    skills: ['Puppeteer', 'EJS', 'Brevo', 'Axios', 'Mocha', 'Sinon.js'],
  },
  {
    title: 'PRACTICES',
    skills: ['System Design', 'Multi-Tenant Architecture', 'Performance Optimization', 'Agile/Scrum'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background-dark">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">EXPERTISE</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-light">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card p-8"
            >
              <h3 className="text-sm font-mono text-primary mb-6 tracking-widest">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
