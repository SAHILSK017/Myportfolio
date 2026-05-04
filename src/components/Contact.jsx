import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's build something <span className="text-primary">great</span> together.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Email Me</p>
                  <p className="text-lg font-bold">sahilkumar.sk017@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Call Me</p>
                  <p className="text-lg font-bold">+91 7488431843</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Location</p>
                  <p className="text-lg font-bold">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/SAHILSK017" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/sahil-bhagat-3a65b0299" },
                { icon: <Twitter size={20} />, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">Subject</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">Message</label>
                <textarea rows="4" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-5 flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
