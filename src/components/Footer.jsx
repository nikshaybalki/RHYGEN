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
          <p className="text-gray-400 text-sm">
            © 2026 <span className="text-forest font-bold">RHYGEN</span>. Built with ❤️ for a Greener India.
          </p>
          
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