import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Globe, Cpu, ShieldCheck } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-500" />,
      skills: ["React.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Backend",
      icon: <Server className="text-orange-500" />,
      skills: ["Node.js", "Express.js", "Python", "REST APIs"]
    },
    {
      title: "Tools & DB",
      icon: <Wrench className="text-green-500" />,
      skills: ["MongoDB", "MySQL", "Git/GitHub", "AWS", "Postman"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-6"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            I am a passionate Full Stack Developer currently pursuing my B.Tech in Computer Engineering. 
            I love building things that live on the internet, from simple websites to complex web applications. 
            My goal is to always build products that provide pixel-perfect, performant experiences.
          </motion.p>
        </div>

        <motion.div 
          id="skills" 
          className="grid md:grid-cols-3 gap-8 mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
              }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Brand/Cert Logos Marquee */}
        <div className="relative flex overflow-hidden group">
          {/* Left/Right Fade out for marquee */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10"></div>
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-24 whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* First Set */}
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
              <Globe size={32} /> Coursera
            </div>
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
              <Cpu size={32} /> IBM
            </div>
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
              <ShieldCheck size={32} /> AWS
            </div>
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
               Generative AI Developer
            </div>
            {/* Duplicated Set for infinite scroll */}
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
              <Globe size={32} /> Coursera
            </div>
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
              <Cpu size={32} /> IBM
            </div>
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
              <ShieldCheck size={32} /> AWS
            </div>
            <div className="flex items-center gap-3 text-3xl font-black font-display text-slate-800 dark:text-slate-200">
               Generative AI Developer
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
