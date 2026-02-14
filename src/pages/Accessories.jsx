import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contactInfo } from '../data';

const Accessories = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Accessories | Gamers Federation</title>
        <meta name="description" content="Browse gaming accessories like controllers, headsets, and peripherals." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          ACCESSORIES
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          Explore controllers, headsets, storage, and peripherals to upgrade your setup. 
          This section is being expanded. For current availability and pricing, reach out directly.
        </p>
        <a
          href={`https://wa.me/${contactInfo.whatsappNumber}?text=Hi!%20I'm%20interested%20in%20gaming%20accessories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors font-semibold"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Accessories;

