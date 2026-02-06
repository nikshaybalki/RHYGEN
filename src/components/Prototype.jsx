import React from 'react';
import { motion } from 'framer-motion';

const prototypeSteps = [
  {
    title: "Combined Setup",
    label: "Full System Integration",
    desc: "The complete bibtya_0.1 bench prototype testing synchronization between power sources.",
    img: "/assets/proto-combined.jpg",
    // We limit the height on desktop so it doesn't grow infinitely
    size: "md:col-span-2 md:row-span-2 max-h-[400px] md:max-h-[600px]"
  },
  {
    title: "Engine-Motor Setup",
    label: "Power Generation",
    desc: "High-efficiency coupling for optimal energy conversion.",
    img: "/assets/proto-engine.jpg",
    size: "md:col-span-1 max-h-[250px] md:max-h-[290px]"
  },
  {
    title: "Embedded Systems",
    label: "Control Unit",
    desc: "Custom ECU logic for real-time hybrid power distribution.",
    img: "/assets/proto-embedded.jpg",
    size: "md:col-span-1 max-h-[250px] md:max-h-[290px]"
  },
  {
    title: "Motor-Load Setup",
    label: "Stress Testing",
    desc: "Simulating heavy-duty uphill torque requirements.",
    img: "/assets/proto-load.jpg",
    size: "md:col-span-2 max-h-[250px] md:max-h-[290px]"
  }
];

const Prototype = () => {
  return (
    <section id="prototype" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header - More compact for better flow */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Prototype <span className="text-forest">Progress</span>
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Testing the <span className="font-mono font-bold text-forest">bibtya_0.1</span> series hybrid powertrain.
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm shrink-0">
            <span className="text-xs font-bold text-sky uppercase">Current Phase: </span>
            <span className="text-xs font-mono text-charcoal">Bench Testing</span>
          </div>
        </div>

        {/* Optimized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
          {prototypeSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border border-gray-100 ${step.size}`}
            >
              {/* Image Container with Fixed Constraints */}
              <div className="w-full h-full overflow-hidden bg-gray-200 relative">
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              </div>

              {/* Content - Always Visible but expands on hover */}
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <span className="text-[10px] uppercase font-black text-sky tracking-widest">
                  {step.label}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">{step.title}</h3>
                <p className="text-xs text-gray-300 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prototype;