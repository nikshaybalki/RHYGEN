import React from 'react';
import { motion } from 'framer-motion';

const impactPoints = [
  {
    title: "Sustainability",
    metric: "30%+",
    desc: "Reduction in CO2 footprint per vehicle.",
    icon: "🌱",
    accent: "border-forest"
  },
  {
    title: "Net Profits",
    metric: "15-20%",
    desc: "Increase in operator margins via fuel savings.",
    icon: "📈",
    accent: "border-sky"
  },
  {
    title: "Performance",
    metric: "Zero",
    desc: "Torque loss during green fuel transitions.",
    icon: "⚡",
    accent: "border-yellow-400"
  },
  {
    title: "Innovation",
    metric: "IITB",
    desc: "Rooted in world-class R&D and engineering.",
    icon: "🎓",
    accent: "border-charcoal"
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Content */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-forest font-bold tracking-widest uppercase text-sm"
          >
            Value Proposition
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-charcoal mt-2"
          >
            Potential <span className="text-forest">Impact</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-sky mt-4 rounded-full"></div>
        </div>

        {/* The Grid - Clean and Structured */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {impactPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-gray-50 p-8 rounded-3xl border-t-4 ${point.accent} shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner">
                {point.icon}
              </div>
              <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
                {point.title}
              </h3>
              <div className="text-3xl font-black text-charcoal mb-3">
                {point.metric}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-forest rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h4 className="text-2xl font-bold">Driving the Future of Indian Logistics</h4>
            <p className="opacity-80">Our hybrid powertrain technology is optimized for Bharat Stage (BS) standards.</p>
          </div>
          <button className="bg-white text-forest px-8 py-3 rounded-full font-bold whitespace-nowrap hover:bg-sky hover:text-white transition-colors">
            View Technical Specs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;