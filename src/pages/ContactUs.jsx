import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Contact Us | Gamers Federation</title>
        <meta name="description" content="Get in touch with Gamers Federation. Phone support, WhatsApp chat, and email for all your gaming inquiries." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
          GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">TOUCH</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Have questions about our products? Need help with an order? 
              Our team of gaming experts is here to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Phone Support</h3>
                  <p className="text-gray-500">{contactInfo.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">WhatsApp</h3>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-400 transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Email</h3>
                  <p className="text-gray-500">support@gamersfederation.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-red-500/20 transition-colors">
                  <MapPin className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Location</h3>
                  <p className="text-gray-500">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
