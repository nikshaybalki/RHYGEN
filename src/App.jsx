// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Vision from './components/Vision';
// import Emission from './components/Emission';
// import Fuels from './components/Fuels';
// import Impact from './components/Impact';
// import Prototype from './components/Prototype';
// import Team from './components/Team';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="bg-white text-charcoal">
//       <Header />
//       <main>
//         <Hero />
//         <Vision />
//         <Emission />
//         <Fuels />
//         <Impact />
//         <Prototype />
//         <Team />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;











// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Vision from './components/Vision';
// import Emission from './components/Emission';
// import Fuels from './components/Fuels';
// import Impact from './components/Impact';
// import Prototype from './components/Prototype';
// import Team from './components/Team';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { motion, useScroll } from 'framer-motion';

// function App() {

// const { scrollYProgress } = useScroll();

//   return (
//     <div className="bg-white text-charcoal">
//       {/* Top Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-forest z-[150] origin-left"
//         style={{ scaleX: scrollYProgress }}
//       />
//       <Header />
//       <main>
//         <Hero />
//         <Vision />
//         <Emission />
//         <Fuels />
//         <Impact />
//         <Prototype />
//         <Team />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;









import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Emission from './components/Emission';
import Fuels from './components/Fuels';
import Impact from './components/Impact';
import Prototype from './components/Prototype';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
// ... other imports (Header, Hero, etc.)

function App() {
  const { scrollYProgress } = useScroll();
  
  // useSpring makes the bar movement smoother and less "robotic"
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white text-charcoal selection:bg-forest selection:text-white">
      {/* Attractive Progress Bar Container */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[200] bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-sky via-forest to-forest origin-left relative"
          style={{ scaleX }}
        >
          {/* Glowing "Head" of the progress bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-forest rounded-full shadow-[0_0_15px_rgba(21,128,61,0.8)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-forest rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      <Header />
      <main>
        <Hero />
        <Vision />
        <Emission />
        <Fuels />
        <Impact />
        <Prototype />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;