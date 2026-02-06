import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);

  return (
    <section id="contact" className="py-24 px-4 bg-white relative">
      <motion.div 
        style={{ scale }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-forest via-forest to-sky rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(21,128,61,0.3)]"
      >
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky/20 rounded-full blur-3xl"
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 backdrop-blur-sm"
          >
            Get In Touch
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Let's build a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200">Greener Path</span>
          </h2>
          
          <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing Indian logistics requires collaboration. Join our journey toward zero-compromise sustainability.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-forest px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-3 transition-colors hover:text-sky"
            >
              Start Conversation <span>🚀</span>
            </motion.button>
            
            <motion.div className="flex -space-x-4">
               {[1,2,3].map((i) => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-forest bg-gray-200 overflow-hidden shadow-lg">
                   <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
                 </div>
               ))}
               <div className="pl-6 flex flex-col items-start justify-center">
                  <span className="text-xs font-bold">Joined by 50+</span>
                  <span className="text-[10px] opacity-70">Industry Partners</span>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;