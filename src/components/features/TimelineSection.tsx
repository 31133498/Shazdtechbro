import React from 'react';
import { motion } from 'framer-motion';

interface TimelineMilestone {
  phase: string;
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

const milestones: TimelineMilestone[] = [
  {
    phase: "PHASE 1: THE SPARK",
    title: "The Broken Phone Hardware",
    description: "Starting with limited resources, a broken smartphone became the catalyst for deep technical curiosity. Learning the fundamentals of logic and computation without a proper PC.",
    icon: "cell_tower",
    isActive: true
  },
  {
    phase: "PHASE 2: ACADEMIC RIGOR", 
    title: "The 5.0 GPA Pursuit",
    description: "Transforming resilience into academic excellence. A relentless commitment to maintaining the highest possible GPA while building real-world AI applications.",
    icon: "school"
  },
  {
    phase: "PHASE 3: SOCIAL IMPACT",
    title: "Architecting the Future", 
    description: "Developing DermaScan and Ilmeen. Applying high-level AI engineering to solve systemic problems in healthcare and education across the continent.",
    icon: "rocket_launch"
  }
];

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="timeline">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display text-sm font-bold uppercase tracking-widest mb-3 italic"
          >
            // Growth Logs
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 dark:text-white text-4xl font-display font-bold"
          >
            The Journey Tracker
          </motion.h3>
        </div>
        
        <div className="relative border-l-2 border-primary/20 ml-6 pl-10 space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`absolute -left-[51px] top-1 h-10 w-10 rounded-full border-4 border-background-dark flex items-center justify-center ${
                milestone.isActive 
                  ? 'bg-primary shadow-[0_0_15px_rgba(19,236,73,0.5)]' 
                  : 'bg-slate-800'
              }`}>
                <span className={`material-symbols-outlined text-lg font-bold ${
                  milestone.isActive ? 'text-background-dark' : 'text-primary'
                }`}>
                  {milestone.icon}
                </span>
              </div>
              
              <div>
                <span className={`font-display font-bold text-sm tracking-widest ${
                  milestone.isActive ? 'text-primary' : 'text-slate-500'
                }`}>
                  {milestone.phase}
                </span>
                <h4 className="text-slate-900 dark:text-white text-2xl font-display font-bold mt-1 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};