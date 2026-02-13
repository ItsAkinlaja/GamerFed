import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, AlertCircle } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
          SHIPPING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">POLICY</span>
        </h1>

        <div className="space-y-12">
          <section className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Truck className="text-purple-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Delivery Methods</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use trusted courier services for nationwide deliveries. For Lagos orders, we use our dedicated dispatch riders or reliable partners like Uber/Bolt for express delivery.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Clock className="text-blue-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Delivery Timelines</h2>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <strong>Lagos:</strong> 1 - 2 Business Days
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <strong>South West (Outside Lagos):</strong> 2 - 3 Business Days
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <strong>Rest of Nigeria:</strong> 3 - 5 Business Days
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <MapPin className="text-green-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Shipping Costs</h2>
                <p className="text-gray-400 leading-relaxed">
                  Shipping costs are calculated based on your location and the weight of your order. The exact cost will be communicated to you before payment.
                </p>
                <div className="mt-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-500">
                    Note: Free shipping may apply for orders above a certain amount within Lagos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <AlertCircle className="text-red-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Important Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Please ensure your delivery address and phone number are correct. Our dispatch rider will attempt delivery twice. If unsuccessful, the item may be returned to our office.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  For waybill deliveries to other states, you may be required to pick up your package at the transport company's terminal in your city.
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingPolicy;
