import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fuelData = {
  diesel: {
    name: "Diesel",
    emissions: 100,
    efficiency: "Baseline",
    color: "bg-gray-600",
    desc: "Standard industrial fuel with high carbon footprint."
  },
  cng: {
    name: "CNG",
    emissions: 40,
    efficiency: "+15% Cleaner",
    color: "bg-sky",
    desc: "A transition fuel that significantly reduces particulates."
  },
  biofuel: {
    name: "Bio-Fuel",
    emissions: 15,
    efficiency: "Sustainable",
    color: "bg-forest",
    desc: "Carbon-neutral potential using local biological sources."
  }
};

const Fuels = () => {
  const [selectedFuel, setSelectedFuel] = useState('diesel');

  return (
    <section id="fuels" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Interactive Controls */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-charcoal leading-tight">
              Fuel <span className="text-forest">Flexibility</span> Without Compromise
            </h2>
            <p className="text-lg text-gray-600">
              Our hybrid technology enables seamless switching to cleaner alternatives without losing the torque required for heavy loads.
            </p>

            <div className="flex bg-gray-100 p-2 rounded-2xl w-fit">
              {Object.keys(fuelData).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedFuel(key)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    selectedFuel === key 
                    ? "bg-white text-forest shadow-md" 
                    : "text-gray-400 hover:text-charcoal"
                  }`}
                >
                  {fuelData[key].name}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {/* Power Output Gauge (Stays constant) */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-charcoal">Power Performance</span>
                  <span className="text-forest font-bold">100% (No Loss)</span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                    className="h-full bg-forest"
                  />
                </div>
              </div>

              {/* Emission Gauge (Changes) */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-charcoal">Carbon Emissions</span>
                  <span className="font-bold text-red-500">{fuelData[selectedFuel].emissions}%</span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${fuelData[selectedFuel].emissions}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className={`h-full ${fuelData[selectedFuel].color}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Visual Card */}
          <div className="flex-1 relative w-full h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFuel}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.4 }}
                className={`w-full max-w-sm p-10 rounded-[3rem] shadow-2xl text-white ${fuelData[selectedFuel].color}`}
              >
                <div className="text-6xl mb-6">
                  {selectedFuel === 'diesel' ? '⛽' : selectedFuel === 'cng' ? '💨' : '🌱'}
                </div>
                <h3 className="text-3xl font-black mb-4">{fuelData[selectedFuel].name} Mode</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  {fuelData[selectedFuel].desc}
                </p>
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                  <p className="text-sm font-bold uppercase tracking-widest">Tech Benefit</p>
                  <p className="text-xl">{fuelData[selectedFuel].efficiency}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fuels;