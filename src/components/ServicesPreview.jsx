import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Download, Cpu, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className="relative group h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative h-full bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-500">
      
      {/* Abstract Background Shapes */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-purple-500/30">
          <Icon className="w-7 h-7 text-purple-400 group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
          <span className="mr-2">Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.div>
);

const ServicesPreview = () => {
  const services = [
    {
      icon: Download,
      title: "Game Installation",
      description: "Premium installation for PC & Consoles. We ensure optimal performance with the latest updates and patches pre-installed."
    },
    {
      icon: Wrench,
      title: "Gadget Repairs",
      description: "Expert diagnostics and repairs for all your gaming gear. From stick drift to motherboard issues, we fix it all."
    },
    {
      icon: Cpu,
      title: "Custom PC Builds",
      description: "Dreaming of the ultimate rig? We design and build high-performance gaming PCs tailored to your specific budget."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-purple-500 font-bold tracking-wider uppercase text-sm">Level Up Your Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Elite Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Beyond selling games, we provide a full ecosystem of professional services to keep you in the game. Quality, speed, and reliability guaranteed.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="hidden md:block"
          >
             <Link 
              to="/services"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <span className="font-semibold text-white">Explore All Services</span>
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Link to="/services" key={index} className="block h-full">
              <ServiceCard
                {...service}
                index={index}
                delay={index * 0.15}
              />
            </Link>
          ))}
        </div>

        <div className="md:hidden flex justify-center">
          <Link 
            to="/services"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/25 hover:bg-purple-700 transition-all duration-300"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
