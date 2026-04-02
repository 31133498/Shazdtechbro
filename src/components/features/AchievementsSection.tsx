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
    title: "Veritas-AI",
    event: "AWS West Africa Hackathon Winner",
    description: "Won the scalable business applications category with Veritas-AI, an AI insurance claim auditor that uses geomapping and EXIF data to detect fraud in minutes rather than weeks.",
    imagePlaceholder: "/aws.jpg"
  },
  {
    title: "Lumina",
    event: "234 Project Foundation Hackathon Winner",
    description: "Won AI for Social Impact with Lumina, an adaptive AI learning platform that personalises each student's experience based on how they learn.",
    imagePlaceholder: "/234.jpg"
  },
  {
    title: "MamaSafe",
    event: "AHEAD Africa Healthtech Conference by Drugstoc",
    description: "Won the healthcare innovation category with MamaSafe, an AI platform protecting pregnant mothers from dangerous drug interactions using Bio-LLMs and EMR APIs.",
    imagePlaceholder: "/ahead.jpg"
  },
  {
    title: "Educational Tool",
    event: "Daydream Hackathon by Hack Club at NFHS",
    description: "Won the Daydream Hackathon hosted by Hack Club at NFHS, building an educational tool that tackled a real problem in secondary school learning environments.",
    imagePlaceholder: "/daydream.jpg"
  },
  {
    title: "Youthpreneur Pitch",
    event: "Youthpreneur Pitch Challenge by MYSF",
    description: "Won the Youthpreneur Pitch Challenge hosted by the Muslim Youth Support Foundation, pitching a tech-driven solution to a pressing youth entrepreneurship problem.",
    imagePlaceholder: "/youthpreneur.jpg"
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
            The Record
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Built under pressure. Shipped under deadline. Won on merit.
          </motion.p>
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
