import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Wrench, Download, Cpu, Gamepad2, Monitor, Disc, CheckCircle, ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../data';

const ServiceFeature = ({ text }) => (
  <div className="flex items-center gap-2 text-sm text-gray-400">
    <CheckCircle className="w-4 h-4 text-purple-500" />
    <span>{text}</span>
  </div>
);

const DetailedServiceCard = ({ icon, title, description, features, delay }) => {
  const ServiceIcon = icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-1 overflow-hidden hover:border-purple-500/30 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-sm p-6 rounded-xl flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-colors">
            <ServiceIcon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
          </div>
          <div className="bg-white/5 px-3 py-1 rounded-full text-xs font-medium text-gray-400 border border-white/5">
            Premium
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="space-y-3 pt-6 border-t border-white/5">
          {features.map((feature, idx) => (
            <ServiceFeature key={idx} text={feature} />
          ))}
        </div>

        <div className="mt-8 pt-4">
          <a 
            href={`https://wa.me/${contactInfo.whatsappNumber}?text=I'm interested in ${encodeURIComponent(title)} service`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 hover:bg-purple-600 text-white font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const StatItem = ({ icon, value, label }) => {
  const StatIcon = icon;
  return (
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
        <StatIcon className="w-6 h-6 text-purple-400" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Download,
      title: "Game Installation",
      description: "Complete digital and physical game installation services for all major platforms. We manage updates, DLCs, and optimizations.",
      features: ["Latest Patches Included", "No Internet Required", "PS5, Xbox, Switch, PC", "Save Data Backup"]
    },
    {
      icon: Wrench,
      title: "Console Repairs",
      description: "Expert diagnostics and repairs for consoles. From HDMI port replacements to overheating issues, we restore your console to factory condition.",
      features: ["Thermal Paste Replacement", "HDMI Port Repair", "Drive Replacement", "3-Month Warranty"]
    },
    {
      icon: Gamepad2,
      title: "Controller Fixes",
      description: "Don't let stick drift ruin your game. We repair and customize controllers for precision and comfort.",
      features: ["Stick Drift Fix", "Button Replacement", "Custom Shells", "Trigger Stops"]
    },
    {
      icon: Monitor,
      title: "PC Building",
      description: "Custom gaming rigs built to your specs. We handle cable management, airflow optimization, and stress testing.",
      features: ["Cable Management", "Benchmark Testing", "RGB Synchronization", "Overclocking Support"]
    },
    {
      icon: Disc,
      title: "Mods & Software",
      description: "Unlock the full potential of your hardware with safe software modifications and game enhancements.",
      features: ["Safe Modding", "System Optimization", "Firmware Updates", "Emulation Setup"]
    },
    {
      icon: Cpu,
      title: "Consultation",
      description: "Not sure what to buy? Get professional advice on setups, upgrades, and future-proofing your gaming station.",
      features: ["Budget Planning", "Compatibility Check", "Upgrade Path", "Peripherals Advice"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      <Helmet>
        <title>Our Services | Gamers Federation</title>
        <meta name="description" content="Expert console repairs, game installation, PC building, and controller fixes in Lagos, Nigeria." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-purple-400" />
                <span>Premium Gaming Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                We Fix. We Build. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">We Empower.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Your one-stop destination for all things gaming. Professional repairs, custom builds, and expert installations delivered with passion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <StatItem icon={ShieldCheck} value="100%" label="Guaranteed" />
                <StatItem icon={Clock} value="24h" label="Quick Turnaround" />
                <StatItem icon={Star} value="500+" label="Happy Gamers" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <DetailedServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 p-12 md:p-20 text-center"
          >
            {/* Decorative background circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Game?
              </h2>
              <p className="text-purple-200 text-lg mb-10">
                Don't let hardware issues hold you back. Contact our expert team today and get back to gaming in no time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-900 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Book a Service Now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
