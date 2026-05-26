import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: "Dr. Evelyn Sterling",
    role: "Co-Founder & Chief Scientist",
    expertise: "MIT | Advanced Hybrid Systems",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=750&q=80",
  },
  {
    name: "Marcus Vance",
    role: "Co-Founder & Head of Systems",
    expertise: "Stanford | Real-Time Control",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=750&q=80",
  },
  {
    name: "Siddharth Roy",
    role: "Co-Founder & Product Architect",
    expertise: "IIT Bombay | Electric Heavy Vehicles",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=750&q=80",
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-charcoal"
          >
            The <span className="text-forest">Founding</span> Team
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A team of visionary engineers dedicated to revolutionizing the Indian commercial vehicle landscape through world-class sustainable technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {founders.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/5] mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                {/* Image Placeholder */}
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-forest px-6 py-2 rounded-full font-bold shadow-lg"
                  >
                    Check Profile
                  </motion.button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-charcoal">{member.name}</h3>
                <p className="text-forest font-semibold text-sm uppercase tracking-widest mt-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs mt-2 italic">
                  {member.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;