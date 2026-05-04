import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold">
          Sahil<span className="text-primary">.</span>
        </div>
        
        <div className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
          Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Sahil Bhagat © {new Date().getFullYear()}
        </div>

        <div className="flex gap-8">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
