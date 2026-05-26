import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background-dark">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label">EDUCATION</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Academic <span className="text-primary">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card bg-[#141416] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-300 max-w-3xl"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <h4 className="text-lg text-primary font-medium mb-1">
                  Computer Science Engineering
                </h4>
                <p className="text-text-muted text-sm">
                  Vignan's Institute of Information Technology
                </p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <span className="text-text-muted font-mono text-sm">
                Aug 2019 – May 2023
              </span>
              <span className="px-3 py-1 bg-white/5 text-text-muted text-xs rounded-full border border-white/10 font-mono">
                GPA: 8.38/10 (79.8%)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
