import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Laptop, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0))] animate-pulse" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-900/10 via-black to-black opacity-80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2000&auto=format&fit=crop"
          alt="Gaming Setup"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 flex flex-col items-center gap-4">
            <p className="text-lg md:text-2xl text-gray-300 font-light italic tracking-wide text-center">
              Everything Gaming, gaming unlimited
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 md:mb-6 leading-tight">
            LEVEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">UP</span> YOUR
            <br />
            EXPERIENCE
          </h1>
          
          <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-400 mb-8 md:mb-10 font-light leading-relaxed px-4">
            Discover the ultimate collection of next-gen consoles, high-performance laptops, and trending games at <span className="text-white font-medium">Gamers Federation</span>. 
            <span className="text-purple-400 font-medium"> Power your play.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full sm:w-auto px-4">
            <motion.a
              href="#games"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Start Shopping</span>
              <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            
            <motion.a
              href="#laptops"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md rounded-full font-bold text-base md:text-lg text-white transition-all flex items-center justify-center gap-2"
            >
              View Laptops
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
