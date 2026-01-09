import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: "psychology",
    skills: ["PyTorch", "TensorFlow", "NLP", "Computer Vision", "Scikit-learn"]
  },
  {
    title: "Data Engineering", 
    icon: "monitoring",
    skills: ["Pandas", "SQL", "Matplotlib", "R Programming", "Apache Spark"]
  },
  {
    title: "Development",
    icon: "code", 
    skills: ["Next.js", "FastAPI", "Docker", "AWS", "CI/CD"]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/40" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display text-sm font-bold uppercase tracking-widest mb-3 italic"
          >
            // Knowledge Graph
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 dark:text-white text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Technical Arsenal
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Categorized expertise built through thousands of hours of coding and theoretical research.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">{category.icon}</span>
              </div>
              <h4 className="text-slate-900 dark:text-white text-xl font-display font-bold mb-4">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 border border-primary/20 text-primary text-xs font-medium font-display rounded-full bg-primary/5"
                  >
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