import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Visual representation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <img 
              src="/assets/vision-greenery.jpg" 
              alt="Sustainable Logistics Vision" 
              className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Subtle Eco-Tag */}
          <div className="absolute -bottom-6 -right-6 bg-forest text-white p-6 rounded-2xl shadow-xl">
            <p className="font-bold text-xl italic">"Future is Green"</p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Our <span className="text-forest">Vision</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At RHYGEN, we aren't just building engines; we are cultivating a sustainable 
            ecosystem for Indian logistics. Our mission is to revolutionize the commercial 
            vehicle industry by integrating high-performance hybrid powertrains that 
            drastically reduce the carbon footprint of every kilometer traveled.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-sky pl-4">
              <h4 className="font-bold text-charcoal">Innovation</h4>
              <p className="text-sm text-gray-500">IIT Bombay rooted R&D.</p>
            </div>
            <div className="border-l-4 border-forest pl-4">
              <h4 className="font-bold text-charcoal">Sustainability</h4>
              <p className="text-sm text-gray-500">Zero-compromise green tech.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Vision;