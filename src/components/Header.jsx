// import React from 'react';

// const Header = () => {
//   const navLinks = [
//     { name: 'Impact', id: 'impact' },
//     { name: 'Prototype', id: 'prototype' },
//     { name: 'Team', id: 'team' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   return (
//     <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
//         {/* Left Side: Logo */}
//         <div className="flex items-center">
//           <div className="h-10 w-10 bg-forest rounded-lg mr-2"></div> {/* Placeholder Logo */}
//           <span className="text-2xl font-bold text-forest tracking-tighter">RHYGEN</span>
//         </div>

//         {/* Right Side: Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <a 
//               key={link.id} 
//               href={`#${link.id}`}
//               className="font-medium hover:text-sky transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;











import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Impact', id: 'impact' },
    { name: 'Prototype', id: 'prototype' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed header height (80px)
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        {/* <div className="flex items-center cursor-pointer z-[110]" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="h-10 w-10 bg-forest rounded-xl flex items-center justify-center shadow-lg shadow-forest/20">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="ml-3 text-2xl font-black text-forest tracking-tighter">RHYGEN</span>
        </div> */}




{/* Logo Section */}
<motion.div 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center cursor-pointer z-[110]" 
  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
>
  {/* Logo Image Container */}
  <div className="h-12 w-auto flex items-center justify-center">
    <img 
      src="/assets/rygen.png" 
      alt="RHYGEN Logo" 
      className="h-full w-auto object-contain"
      // Optimization: Ensure the image doesn't flicker on load
      loading="eager" 
    />
  </div>
  
  {/* Optional: Keep the text if your image is just an icon, 
      otherwise, you can remove the span below */}
  <span className="ml-3 text-2xl font-black text-forest tracking-tighter hidden sm:block">
    RHYGEN
  </span>
</motion.div>









        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-bold text-charcoal hover:text-sky transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-forest z-[110] relative"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-forest rounded-full origin-left"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-forest rounded-full"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-forest rounded-full origin-left"
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-white z-[105] flex flex-col p-8"
          >
            {/* Menu Content */}
            <div className="flex flex-col items-start justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-5xl font-black text-charcoal hover:text-forest transition-colors uppercase tracking-tighter text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Bottom Branding for Mobile */}
            <div className="border-t border-gray-100 pt-8 pb-4">
              <p className="text-forest font-bold tracking-widest text-xs uppercase mb-2">IIT Bombay Rooted</p>
              <p className="text-gray-400 text-sm">Engineering a sustainable future for Indian Logistics.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;