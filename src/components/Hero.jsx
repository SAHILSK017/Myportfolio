import React from 'react';
import { motion } from 'framer-motion';
import { Server, ExternalLink, Play } from 'lucide-react';
import profilePic from '../assets/profilepic.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-white dark:bg-slate-950 font-sans">
      
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      {/* Right side background elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-full hidden lg:block -z-10">
        {/* Large Slanted Shape */}
        <div 
          className="absolute inset-0 bg-secondary/5 dark:bg-secondary/10"
          style={{ 
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderBottomLeftRadius: '200px' 
          }}
        ></div>
        
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] border border-secondary/20 rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[15%] w-[400px] h-[400px] border border-primary/20 rounded-full border-dashed"
        ></motion.div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        
        {/* Left Content Area */}
        <div className="max-w-xl pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20 cursor-default">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            {"From Idea to interface".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 1.2, y: -2 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          
          <h1 className="text-6xl lg:text-[5.5rem] font-bold text-slate-900 dark:text-white leading-[1.05] mb-8 font-display tracking-tight cursor-default">
            {/* Split "Hi, I am" into characters */}
            {"Hi, I am ".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.3, color: "#FF6B00" }}
                whileTap={{ scale: 1.3, color: "#FF6B00" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block hover:z-10 relative"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {/* Split "Sahil Bhagat" into characters with gradient */}
            <span className="text-slate-900 dark:text-white">
              {"Sahil Bhagat".split("").map((char, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.3, rotate: index % 2 === 0 ? 10 : -10, color: "#FF6B00" }}
                  whileTap={{ scale: 1.3, rotate: index % 2 === 0 ? 10 : -10, color: "#FF6B00" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block relative z-10"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-md font-medium cursor-default">
            {"From Idea to deployment — I design and build ".split("").map((char, index) => (
              <motion.span key={index} whileHover={{ color: "#FF6B00" }} whileTap={{ color: "#FF6B00" }} className="inline-block transition-colors duration-150">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="text-secondary dark:text-secondary-lighter">
              {"full-stack web applications".split("").map((char, index) => (
                <motion.span key={index} whileHover={{ scale: 1.1, color: "#FF6B00" }} whileTap={{ scale: 1.1, color: "#FF6B00" }} className="inline-block transition-all duration-150">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-8 mb-20 relative">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 flex items-center gap-3"
            >
              View My Work <ExternalLink size={20} />
            </motion.a>
            
            {/* Hand-drawn Arrow SVG */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute left-[260px] top-6 hidden xl:block text-slate-300 dark:text-slate-700"
            >
              <svg width="140" height="70" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  d="M5 55C30 50 45 10 90 20C100 22 105 30 110 40" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  d="M110 40L100 30M110 40L115 25" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Logos/Brands */}
          <div className="flex items-center gap-10 opacity-30 dark:opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
            <span className="text-2xl font-black font-display tracking-tighter">coursera</span>
            <span className="text-2xl font-black font-display tracking-tighter">SKILLSHARE.</span>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="relative flex justify-center items-center mt-20 lg:mt-0">
          
          {/* Design elements behind the pic */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            {/* Glowing Aura */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[450px] h-[450px] bg-secondary/30 dark:bg-secondary/20 rounded-full blur-[80px]"
            ></motion.div>
            
            {/* Abstract Floating Shapes */}
            <motion.div 
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-3xl rotate-12 backdrop-blur-sm border border-primary/20"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, 40, 0],
                rotate: [0, -15, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full backdrop-blur-sm border border-secondary/20"
            ></motion.div>
          </div>
          
          {/* Main Profile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={{
              hidden: { 
                opacity: 0, 
                x: 80, 
                scale: 0.9,
                transition: { duration: 0.2, ease: "easeIn" } 
              },
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { type: "tween", duration: 0.6, ease: "easeOut" } 
              }
            }}
            style={{ willChange: "transform, opacity" }}
            className="relative z-10 w-full max-w-[500px]"
          >
            <motion.div 
              whileHover="hover"
              whileTap="hover"
              className="relative overflow-hidden rounded-[3rem] shadow-2xl cursor-pointer"
            >
              <motion.img 
                src={profilePic} 
                alt="Sahil Bhagat" 
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-auto object-cover"
              />
              <motion.div 
                variants={{
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 pointer-events-none"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Badge 1: Full Stack Developer */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-[-20px] right-[-10px] md:top-20 md:left-[-20px] md:right-auto md:bottom-auto z-20 badge-card bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 border-l-4 border-l-secondary scale-75 md:scale-100"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
               <Server size={20} />
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">Full Stack Developer</span>
          </motion.div>

          {/* Floating Badge 3: User Card */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-70px] left-[-10px] md:bottom-[-20px] md:left-10 z-20 badge-card bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 border-l-4 border-l-primary scale-75 md:scale-100"
          >
            <div className="relative">
              <img src={profilePic} alt="User" className="w-12 h-12 rounded-xl object-cover shadow-md" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></div>
            </div>
            <div>
              <p className="font-black text-slate-900 dark:text-white text-base">Sahil</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Innovative thinker</p>
            </div>
          </motion.div>

          {/* Floating Stars/Decorations */}
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: 360,
              opacity: [0.5, 1, 0.5]
            }} 
            transition={{ duration: 3, repeat: Infinity }} 
            className="absolute top-1/4 right-[-20px] md:right-[-40px] text-yellow-400 hidden sm:block"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
