import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = ["Impact", "Prototype", "Team", "Contact"];

  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          {/* <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-3xl font-black text-forest tracking-tighter">RHYGEN</span>
            </div>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
              We are engineering the heartbeat of sustainable Indian transport. High-performance hybrid solutions designed for the toughest roads.
            </p>
          </div> */}



{/* Brand Column */}
          <div className="col-span-2">
            <motion.div 
              whileHover={{ opacity: 0.8 }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              {/* Logo Image */}
              <img 
                src="/assets/rygen.png" 
                alt="RHYGEN Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-3xl font-black text-forest tracking-tighter">RHYGEN</span>
            </motion.div>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
              We are engineering the heartbeat of sustainable Indian transport. High-performance hybrid solutions designed for the toughest roads.
            </p>
          </div>






          {/* Links Column */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <motion.li key={link} whileHover={{ x: 10 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-forest font-medium transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Social Column */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-sm">Follow the Innovation</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <motion.div 
                  key={social}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-sky/10 transition-colors border border-gray-100"
                >
                  <span className="text-xs font-bold text-charcoal">{social[0]}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* <p className="text-gray-400 text-sm">
            © 2026 <span className="text-forest font-bold">RHYGEN</span>. created by Nikshay . A . Balki .
          </p> */}


 {/* <p className="text-gray-400 text-sm flex items-center gap-2">
  © 2026 <span className="text-forest font-bold ml-1">RHYGEN</span>. 
  <span className="ml-1">Created by -</span>
   */}
  {/* Link for the Name */}
  {/* <a 
    href="https://www.linkedin.com/in/nikshay-balki-7b2909321" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-forest transition-colors font-medium border-b border-transparent hover:border-forest"
  >
    Nikshay . A . Balki
  </a> */}

  {/* LinkedIn Icon Link */}
  {/* <motion.a 
    whileHover={{ scale: 1.2, rotate: 5 }}
    href="https://www.linkedin.com/in/nikshay-balki-7b2909321" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#0077B5] hover:text-forest transition-colors"
    aria-label="LinkedIn Profile"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.062-1.865-3.062-1.867 0-2.153 1.459-2.153 2.966v5.7h-3v-11h2.88v1.503h.04c.401-.76 1.381-1.559 2.839-1.559 3.036 0 3.596 1.998 3.596 4.596v6.46z"/>
    </svg>
  </motion.a>
</p> */}




<div className="flex flex-col items-center md:items-start gap-3">
  <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
    © 2026 <span className="text-forest font-bold">RHYGEN</span>. 
    <span className="block sm:inline"> Created by </span>
    
    {/* Link for the Name */}
    <a 
      href="https://www.linkedin.com/in/nikshay-balki-7b2909321" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-charcoal font-bold hover:text-forest transition-colors border-b border-transparent hover:border-forest"
    >
      Nikshay . A . Balki
    </a>
  </p>

  {/* LinkedIn Button for Mobile - More "Touch-Friendly" */}
  <motion.a 
    whileTap={{ scale: 0.9 }}
    href="https://www.linkedin.com/in/nikshay-balki-7b2909321" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-[#0077B5]/10 px-4 py-2 rounded-full text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300"
  >
    <span className="text-xs font-bold uppercase tracking-wider">Connect</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.062-1.865-3.062-1.867 0-2.153 1.459-2.153 2.966v5.7h-3v-11h2.88v1.503h.04c.401-.76 1.381-1.559 2.839-1.559 3.036 0 3.596 1.998 3.596 4.596v6.46z"/>
    </svg>
  </motion.a>
</div>

















          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">System Status: Optimal</span>
            </div>
            <p className="text-xs text-gray-400 hover:text-forest cursor-pointer">Privacy & Data</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;