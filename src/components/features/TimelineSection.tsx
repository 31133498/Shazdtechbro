import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Laptop, Trophy, Users, Zap, LucideIcon } from 'lucide-react';

interface TimelineMilestone {
  phase: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  isActive?: boolean;
}

const milestones: TimelineMilestone[] = [
  {
    phase: "PHASE 1: THE SPARK",
    title: "A broken phone and a big question",
    description: "Limited resources. No PC. A smartphone that barely worked. That was the starting point. Instead of waiting for better conditions, I used what I had to learn how computers think.",
    Icon: Radio
  },
  {
    phase: "PHASE 2: THE BUILD",
    title: "Shipping real things under pressure",
    description: "Secondary school hackathons. Borrowed laptops. Winning competitions in a school uniform. By the time I gained admission to the University of Lagos, I had already built, broken, and rebuilt more than most students see in four years.",
    Icon: Laptop
  },
  {
    phase: "PHASE 3: THE RECOGNITION",
    title: "5 wins and counting",
    description: "AWS. 234 Project. AHEAD Africa. Daydream. Youthpreneur. Five hackathon wins across healthcare, education, insurance, and entrepreneurship. Each one a stress test of ideas against real problems with real deadlines.",
    Icon: Trophy
  },
  {
    phase: "PHASE 4: THE COMMUNITY",
    title: "Building what we wished existed",
    description: "Co-founded TeenovateX Labs with Anas Abubakar Masama and Yasin Lasisi. Started from a problem we were living. Now 1,000+ teenagers strong, visiting secondary schools across Lagos, and backed by Hack Club.",
    Icon: Users
  },
  {
    phase: "PHASE 5: NOW",
    title: "Deeper in the work",
    description: "Building PharmChain. Leading growth at Setld. Running TeenovateX outreach across Lagos schools. Implementing everything learned from the sharpest intellects available. This is the chapter where it compounds.",
    Icon: Zap,
    isActive: true
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
            How I Got Here
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
                <milestone.Icon
                  size={18}
                  className={milestone.isActive ? 'text-background-dark' : 'text-primary'}
                />
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
