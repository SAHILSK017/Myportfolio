import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Engineering",
      school: "Parul Institute of Technology, Parul University",
      period: "Expected 2027",
      details: "Focusing on Software Development, DSA, and Web Technologies."
    },
    {
      degree: "12th - Higher Secondary",
      field: "BSEB",
      school: "MP College Siwan",
      period: "Completed",
      details: "Science stream with focus on Mathematics and Physics."
    }
  ];

  const certs = [
    { name: "PU Code Hackathon 2026", issuer: "Parul University" },
    { name: "Artificial Intelligence Course", issuer: "IBM" },
    { name: "AWS Cloud Certification", issuer: "Amazon Web Services" }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
              <GraduationCap className="text-primary" size={32} /> Education
            </h2>
            <div className="space-y-10 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-10 relative">
              {education.map((edu, idx) => (
                <motion.div 
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[51px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-slate-950"></div>
                  <div className="flex items-center gap-3 text-primary font-bold text-sm mb-2">
                    <Calendar size={14} /> {edu.period}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-primary/80 font-medium mb-3">{edu.school}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
              <Award className="text-primary" size={32} /> Certifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {certs.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-3xl hover:bg-white dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-primary/20 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <h3 className="font-bold mb-1">{cert.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
