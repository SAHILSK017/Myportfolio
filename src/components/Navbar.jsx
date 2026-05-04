import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary transform origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white cursor-default">
          {"Sahil Bhagat".split("").map((char, index) => (
            <motion.span
              key={index}
              display="inline-block"
              whileHover={{ scale: 1.2, color: "#FF6B00" }}
              transition={{ type: "spring", stiffness: 400 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </a>

        {/* Desktop Nav Links (Centered) */}
        <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 dark:text-slate-300 font-medium hover:text-primary transition-colors text-sm">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={toggleTheme} className="text-slate-500 hover:text-primary transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#E66000] transition-colors text-sm shadow-lg shadow-orange-500/30">
            Contact Us
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-slate-500">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900 dark:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
