import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  event: string;
  description: string;
  imagePlaceholder: string;
}

const achievements: Achievement[] = [
  {
    title: "Lumina AI Platform",
    event: "234 Project Hackathon Winner",
    description: "Won AI for Social Good category with Lumina, an AI-powered adaptive educational platform transforming learning.",
    imagePlaceholder: "/234.jpg"
  },
  {
    title: "Veritas-AI",
    event: "AWS Hackathon Winner", 
    description: "Won using AI to create smart scalable business applications with Veritas-AI, an AI-powered insurance claim auditor.",
    imagePlaceholder: "/aws.jpg"
  },
  {
    title: "MamaSafe Platform",
    event: "AHEAD Hackathon by Drugstoc Winner",
    description: "Won with MamaSafe, an AI, EMR API and Pharmacovigilance API powered platform protecting pregnant mothers from risky drug complications.",
    imagePlaceholder: "/ahead.jpg"
  }
];

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/40" id="achievements">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display text-sm font-bold uppercase tracking-widest mb-3 italic"
          >
            // Victory Metrics
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 dark:text-white text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Hackathon Victories
          </motion.h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <img 
                  src={achievement.imagePlaceholder} 
                  alt={`${achievement.title} achievement`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-primary font-display font-bold text-xs uppercase tracking-widest">
                    {achievement.event}
                  </span>
                  <h4 className="text-slate-900 dark:text-white text-xl font-display font-bold mt-1">
                    {achievement.title}
                  </h4>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};