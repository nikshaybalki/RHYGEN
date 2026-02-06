import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content: Text and CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-forest font-semibold tracking-wider uppercase text-sm mb-4 block">
            Revolutionizing Commercial Transport
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">
            The Future of <br />
            <span className="text-forest">Green Logistics</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Empowering Indian heavy-duty trucks with high-performance hybrid powertrains. 
            Reducing emissions without compromising on power.
          </p>
          
          <div className="mt-10 flex space-x-4">
            <button className="bg-forest text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-forest/20">
              Explore Tech
            </button>
            <button className="border-2 border-forest text-forest px-8 py-4 rounded-full font-bold hover:bg-forest hover:text-white transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Content: Image Render */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative element for Eco-theme */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky/20 rounded-full blur-3xl"></div>
          
          <motion.img 
            src="/assets/hero-truck.png" // Ensure you place your truck image here
            alt="Rhygen Hybrid Truck" 
            className="relative z-10 w-full h-auto drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Background Graphic Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;