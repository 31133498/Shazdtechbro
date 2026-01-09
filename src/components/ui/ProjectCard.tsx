import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  number?: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link,
  number,
  index
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
      onClick={() => link && window.open(link, '_blank')}
    >
      {number && (
        <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
          <span className="text-background-dark font-display font-black text-lg">{number}</span>
        </div>
      )}
      
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          alt={`${title} project screenshot`}
          src={image}
        />
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-slate-900 dark:text-white text-2xl font-display font-bold group-hover:text-primary transition-colors">
            {title}
          </h4>
          {link && (
            <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">
              open_in_new
            </span>
          )}
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};