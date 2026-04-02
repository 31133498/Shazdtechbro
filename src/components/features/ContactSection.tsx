import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-primary/5 dark:bg-primary/5" id="contact">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-display text-sm font-bold uppercase tracking-widest mb-3 italic"
        >
          // Let's Connect
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-900 dark:text-white text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Let's Build Something
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          Open to technical collaborations, co-founder conversations, mentorship, and opportunities aligned with building real things for real people.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sannishazily@gmail.com"
            className="bg-primary text-background-dark px-8 py-4 rounded-lg font-display font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(19,236,73,0.3)] flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Send Email
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/sanni-shazily-bba942266/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/20 text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-display font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            <Briefcase size={20} />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};