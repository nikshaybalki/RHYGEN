import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Emission = () => {
  // Creating a scroll-based parallax effect for the background elements
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="emission" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background "Pollution" clouds that fade as you scroll */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-charcoal"
          >
            The <span className="text-red-500">Environmental</span> Cost
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Interactive Stats Side */}
          <div className="space-y-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-2xl border border-gray-100"
            >
              <div className="flex items-baseline space-x-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-7xl md:text-8xl font-black text-charcoal"
                >
                  200
                </motion.span>
                <span className="text-4xl font-bold text-red-500 underline decoration-4">Million</span>
              </div>
              <p className="text-xl font-medium text-gray-500 mt-2 uppercase tracking-tighter">
                Tonnes of $CO_2$ Annually
              </p>
              
              <div className="mt-8 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <p className="text-gray-700 italic">
                  "Heavy trucks are only 2% of vehicles, yet they carry 
                  <span className="font-bold text-red-600"> 40% of the pollution burden.</span>"
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual Solution Side */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* The "Problem" Circle */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute w-64 h-64 bg-gray-800 rounded-full flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl"
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 40px rgba(239, 68, 68, 0.4)", "0px 0px 0px rgba(0,0,0,0)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-4xl mb-2">🏭</span>
              <p className="font-bold text-sm uppercase">Current Industry Standard</p>
            </motion.div>

            {/* The "Rhygen" Solution Circle - Overlapping on Hover */}
            <motion.div 
              whileHover={{ scale: 1.1, zIndex: 20 }}
              className="absolute w-72 h-72 bg-forest rounded-full flex flex-col items-center justify-center text-white p-8 text-center cursor-pointer shadow-2xl border-4 border-white translate-x-20 translate-y-20"
            >
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-5xl mb-2"
              >
                🍃
              </motion.span>
              <h4 className="text-2xl font-bold">-30%</h4>
              <p className="text-xs font-light uppercase tracking-widest">Immediate $CO_2$ Reduction</p>
              <div className="mt-2 text-[10px] bg-white/20 px-2 py-1 rounded-full">
                Tap to see impact
              </div>
            </motion.div>
          </div>

        </div>

        {/* Feature Grid Below */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { icon: "🚛", title: "Heavy-Duty Focus", desc: "Solving the hardest part of transport.", color: "border-sky" },
            { icon: "📉", title: "Drastic Cuts", desc: "Targeting 200M tonnes of waste.", color: "border-red-400" },
            { icon: "🔋", title: "Hybrid Efficiency", desc: "Power meets sustainability.", color: "border-forest" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-6 bg-white rounded-2xl border-b-4 ${item.color} shadow-lg`}
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h5 className="font-bold text-charcoal">{item.title}</h5>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Emission;