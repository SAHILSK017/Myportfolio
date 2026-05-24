import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Play, X } from 'lucide-react';
import backtraceImg from '../assets/backtrace.png';
import avataniImg from '../assets/avatani.png';

import NeuraldeskImg from '../assets/Neuraldesk.png';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      title: "BackTrace",
      subtitle: "Lost & Found Platform",
      description: "A full-stack MERN application for reporting and tracking lost items. Features real-time matching and secure user authentication.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/SAHILSK017/Backtrace",
      demo: "https://backtracesk.vercel.app/",
      image: backtraceImg,
      video: "/backtracevideo.mp4"
    },

    {
      title: "AVATANI",
      subtitle: "Instant Service Platform",
      description: "Avatani is an on-demand service booking platform that connects users with nearby service providers, enabling fast, reliable, and real-time booking and service fulfillment..",
      tech: ["MERN Stack", "JWT", "Express"],
      github: "https://github.com/SAHILSK017/Awatani-a-service-booking-app-",
      demo: "https://awatani.vercel.app/login",
      image: avataniImg
    },
    {
      title: "NEURALDESK",
      subtitle: "AI Powered Smart Note-Taking Workspace",
      description: "NeuralDesk is an AI-powered smart note-taking and productivity platform designed to help users write, organize, and manage notes more intelligently. The platform integrates Google Gemini AI to generate summaries, action items, and intelligent insights from user content. It features secure JWT-based authentication, persistent task synchronization, debounced auto-save workflows, and AI response caching for optimized performance. Built with the MERN stack and Next.js, the project focuses on scalable backend architecture, responsive UI design, and immersive user experience through cinematic animations and interactive elements.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "JWT", "Next.js", "Google Gemini AI", "Firebase Storage"],
      github: "https://github.com/SAHILSK017/AI-Notes",
      demo: "https://ai-notes-seven-iota.vercel.app/",
      image: NeuraldeskImg
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-4">Selected Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Each project is a unique piece of development, built with modern technologies and a focus on user experience.
            </p>
          </div>
          <a href="https://github.com/SAHILSK017" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            See All Projects <ArrowRight size={20} />
          </a>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Project Image */}
              <div 
                className={`w-full lg:w-3/5 group relative ${project.video ? 'cursor-pointer' : ''}`}
                onClick={() => project.video && setActiveVideo(project.video)}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[16/10] card-gradient transform transition-transform duration-500 hover:-translate-y-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Tech Tags on Image Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    {project.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-5 bg-primary/95 hover:bg-primary text-white rounded-full transition-all duration-300 shadow-lg shadow-primary/40 hover:scale-110 transform translate-y-4 group-hover:translate-y-0">
                          <Play size={32} fill="currentColor" className="ml-1" />
                        </div>
                      </div>
                    )}
                    <div 
                      className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.github} className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors hover:scale-110">
                        <Github size={24} />
                      </a>
                      <a href={project.demo} className="p-4 bg-primary rounded-full text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/40 hover:scale-110">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Decorative background blob */}
                <div className={`absolute top-1/2 -z-10 w-full h-full rounded-full blur-[100px] opacity-20 ${idx % 2 === 0 ? 'bg-primary left-10' : 'bg-secondary right-10'} transform -translate-y-1/2`}></div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{project.subtitle}</p>
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="text-sm font-semibold tracking-wider px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <a href={project.demo} className="inline-flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors group/link">
                    View Project
                    <ArrowRight size={20} className="transform group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all duration-300 hover:scale-110"
              onClick={() => setActiveVideo(null)}
            >
              <X size={20} />
            </button>
            
            {/* Video Element */}
            <video 
              src={activeVideo} 
              autoPlay 
              controls 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
