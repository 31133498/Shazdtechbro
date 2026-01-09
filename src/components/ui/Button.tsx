import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  onClick
}) => {
  const baseClasses = "font-display font-bold transition-all rounded-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-background-dark hover:brightness-110 shadow-[0_0_15px_rgba(19,236,73,0.3)]",
    secondary: "border border-white/20 text-white hover:bg-white/5",
    outline: "border border-primary/20 text-primary hover:bg-primary/5"
  };
  
  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};