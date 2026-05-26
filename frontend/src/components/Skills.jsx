import React from 'react';
import { motion } from 'framer-motion';

const skillsGroups = [
  {
    title: 'LANGUAGES',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'HTML5', 'CSS3']
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    skills: ['Angular', 'React', 'Express.js', 'React Native']
  },
  {
    title: 'BACKEND & DATA',
    skills: ['Node.js', 'REST APIs', 'JWT', 'Redis', 'MongoDB', 'SQL']
  },
  {
    title: 'CLOUD & DEVOPS',
    skills: ['AWS Lambda', 'SQS', 'S3', 'CloudWatch', 'EventBridge', 'GitHub Actions', 'CI/CD']
  },
  {
    title: 'TESTING',
    skills: ['Mocha', 'Sinon.js', 'Unit Testing', 'Integration Testing']
  },
  {
    title: 'PRACTICES',
    skills: ['System Design', 'Distributed Systems', 'Scalability', 'Performance Optimization', 'Agile/Scrum']
  }
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
          <h2 className="text-3xl md:text-5xl font-bold text-white">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 border-white/5 bg-[#141416]"
            >
              <h3 className="text-sm font-mono text-primary mb-6 tracking-widest">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill hover:text-primary hover:border-primary/50 transition-colors">
                    {skill}
                  </span>
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
