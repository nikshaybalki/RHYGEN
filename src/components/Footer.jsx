import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = ["Impact", "Prototype", "Team", "Contact"];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-gray-300 pt-24 pb-12 relative overflow-hidden border-t border-emerald-950/60">
      
      {/* Decorative Glowing Orbs for Luxury Modern Feel */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ opacity: 0.9 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              {/* Custom Synapse Logo */}
              <div className="h-10 w-10 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-full h-full text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="30" y1="30" x2="50" y2="50" strokeWidth="5" className="opacity-70 stroke-emerald-400" />
                  <line x1="70" y1="30" x2="50" y2="50" strokeWidth="5" className="opacity-70 stroke-sky-400" />
                  <line x1="50" y1="75" x2="50" y2="50" strokeWidth="5" className="opacity-70 stroke-emerald-400" />
                  <circle cx="30" cy="30" r="9" className="fill-gray-900 stroke-emerald-400" strokeWidth="7" />
                  <circle cx="70" cy="30" r="9" className="fill-gray-900 stroke-sky-400" strokeWidth="7" />
                  <circle cx="50" cy="75" r="11" className="fill-emerald-400 stroke-emerald-400" />
                  <circle cx="50" cy="50" r="8" className="fill-sky-400 stroke-sky-400" />
                </svg>
              </div>
              <span className="text-3xl font-black text-white tracking-widest uppercase">
                Synaptic
              </span>
            </motion.div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering the nervous system of modern, sustainable commercial transport. 
              Our state-of-the-art hybrid technology drives zero-compromise logistics.
            </p>
            
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-400/90 font-mono tracking-wider">SYSTEM STATUS: OPTIMAL</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-gray-800 pb-2">
              Explore
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <motion.li key={link} whileHover={{ x: 6 }}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-emerald-400 font-medium text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3: Redesigned Creative Partner Showcase (Aura Creative) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/60 to-emerald-950/20 border border-emerald-950/50 p-8 rounded-[2rem] space-y-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-2">
              <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest block">
                Creative Partner
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Aura Creative
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Aura Creative specializes in crafting state-of-the-art, premium digital experiences that captivate, inspire, and deliver results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Aura Creative Website Link */}
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="https://auracreative-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                Visit Website
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.a>

              {/* LinkedIn Page Link */}
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/company/aura-creativee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-gray-700 transition-all duration-300"
              >
                LinkedIn Page
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.062-1.865-3.062-1.867 0-2.153 1.459-2.153 2.966v5.7h-3v-11h2.88v1.503h.04c.401-.76 1.381-1.559 2.839-1.559 3.036 0 3.596 1.998 3.596 4.596v6.46z"/>
                </svg>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-850 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            {/* Prominent Aura Creative Copyright */}
            <p className="text-gray-400 text-sm font-semibold tracking-wide text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-emerald-400">Aura Creative</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-left tracking-wider uppercase font-medium">
              All rights reserved to auracreative
            </p>
          </div>

          {/* Developer Attribution & Links */}
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-xs">
              Designed & Crafted by{' '}
              <a
                href="https://www.linkedin.com/in/nikshay-balki-7b2909321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 font-bold transition-colors border-b border-transparent hover:border-emerald-400"
              >
                Nikshay . A . Balki
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;