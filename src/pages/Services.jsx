import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Download, Cpu, Gamepad2, Monitor, Disc } from 'lucide-react';
import { contactInfo } from '../data';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
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

const Services = () => {
  const services = [
    {
      icon: Download,
      title: "Game Installation",
      description: "Expert installation services for PC and all consoles including PS5, PS4, Xbox Series X/S, Nintendo Switch, and Steam Deck. We ensure your games are running perfectly with the latest updates."
    },
    {
      icon: Wrench,
      title: "Gadget Repairs",
      description: "Professional repair services for controllers, consoles, and gaming accessories. From stick drift to HDMI port replacements, our technicians bring your gear back to life."
    },
    {
      icon: Gamepad2,
      title: "Gadget Sales",
      description: "Premium selection of gaming hardware including custom controllers, high-performance headsets, mechanical keyboards, and precision mice."
    },
    {
      icon: Cpu,
      title: "Gaming Consultation",
      description: "Get expert advice on PC builds, console setups, and room acoustics. We help you design the ultimate gaming battlestation tailored to your budget and needs."
    },
    {
      icon: Disc,
      title: "Mods & Software",
      description: "Safe installation of game mods, patches, and software optimizations to enhance your gaming experience. Unlock new features and improve performance."
    },
    {
      icon: Monitor,
      title: "PC Building & Upgrades",
      description: "Custom PC building services and hardware upgrades. Whether you need a simple RAM boost or a full liquid-cooled rig, we handle it with care."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Beyond just games, we provide comprehensive solutions for all your gaming needs. 
          From installations to repairs, GamerFed has you covered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 text-center border border-white/10 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a service or discuss your gaming requirements. 
          Our team is ready to assist you.
        </p>
        <a
          href={`https://wa.me/${contactInfo.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
        >
          Book a Service
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
