import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Inncircles Technologies',
    role: 'Senior Software Engineer',
    location: 'Hyderabad, India',
    period: 'Aug 2025 - Present',
    pills: ['MEAN/MERN Stack & AWS'],
    responsibilities: [
      'Led a team of 3 engineers, owning architecture decisions and building scalable microservices with CI/CD pipelines.',
      'Designed high-availability distributed systems with horizontal scaling and fault-tolerant architecture.',
      'Migrated scheduled workloads to AWS Lambda and EventBridge, reducing operational overhead.',
      'Engineered a real-time messaging platform using WebSockets and Redis, supporting 10,000+ concurrent users.',
      'Introduced collaboration features including mentions, threaded replies, and file sharing, reducing support turnaround time by 30%.'
    ]
  },
  {
    company: 'Inncircles Technologies',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    period: 'Sep 2023 - Jul 2025',
    pills: ['MEAN/MERN Stack'],
    responsibilities: [
      'Designed a billing and invoicing system supporting multiple rate types, processing 1,000+ orders.',
      'Built and maintained 100+ API endpoints handling high-throughput requests, reducing failure rates from 4% to below 1%.',
      'Streamlined document workflows using Puppeteer and EJS for PDF generation and integrated Brevo for email notifications, saving 8+ hours/week.'
    ]
  },
  {
    company: 'Inncircles Technologies',
    role: 'Software Engineer Intern',
    location: 'Hyderabad, India',
    period: 'Mar 2023 - Aug 2023',
    pills: ['MEAN/MERN Stack'],
    responsibilities: [
      'Resolved memory leaks in React Native app, reducing crashes by 20%.',
      'Integrated Expo Camera with custom gestures, improving engagement by 18%.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background-dark">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label">CAREER</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Work <span className="text-primary">Experience</span>
          </h2>
        </motion.div>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[53px] md:-left-[39px] top-8 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                
                <div className="card bg-[#141416] p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                        <Building2 size={16} className="text-primary" />
                        <span>{exp.company}</span>
                        <span>&middot;</span>
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex gap-2">
                        {exp.pills.map(pill => (
                          <span key={pill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-text-muted font-mono text-sm whitespace-nowrap pt-1">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-text-muted">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
