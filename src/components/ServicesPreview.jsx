import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Download, Cpu, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
  >
    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors">
      <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ServicesPreview = () => {
  const services = [
    {
      icon: Download,
      title: "Game Installation",
      description: "Expert installation services for PC and all consoles including PS5, Xbox, and Switch."
    },
    {
      icon: Wrench,
      title: "Gadget Repairs",
      description: "Professional repair services for controllers, consoles, and gaming accessories."
    },
    {
      icon: Cpu,
      title: "PC Building",
      description: "Custom PC building services and hardware upgrades tailored to your needs."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-end mb-10 md:mb-16">
            <div className="flex items-center gap-4">
              <div className="h-8 md:h-12 w-1.5 md:w-2 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                Our Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link 
              to="/services"
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
