import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Instagram, Phone, Youtube, Heart } from 'lucide-react';
import { contactInfo } from '../data';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 py-12 md:py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Gamers Federation" className="h-24 md:h-32 w-auto transition-all duration-300" />
            </div>
            <p className="text-lg text-gray-300 italic font-light tracking-wide">
              Everything Gaming, gaming unlimited
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              Elevating your gaming experience with premium gear and unbeatable prices. The ultimate destination for true gamers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Products</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#games" className="hover:text-purple-400 transition-colors duration-300">Latest Games</Link></li>
              <li><Link to="/#consoles" className="hover:text-purple-400 transition-colors duration-300">Consoles</Link></li>
              <li><Link to="/#laptops" className="hover:text-purple-400 transition-colors duration-300">Gaming Laptops</Link></li>
              <li><Link to="/#accessories" className="hover:text-purple-400 transition-colors duration-300">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-purple-400 transition-colors duration-300">FAQs</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-purple-400 transition-colors duration-300">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-purple-400 transition-colors duration-300">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="group bg-white/5 p-3 rounded-xl hover:bg-green-500/20 hover:scale-110 transition-all duration-300">
                <Phone size={20} className="group-hover:text-green-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/gamers_fed_official?igsh=eDNrYXcyZWxzZGt5" target="_blank" rel="noopener noreferrer" className="group bg-white/5 p-3 rounded-xl hover:bg-pink-500/20 hover:scale-110 transition-all duration-300">
                <Instagram size={20} className="group-hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@bhiigjoe?_r=1&_t=ZS-93tNQ0MqQvI" target="_blank" rel="noopener noreferrer" className="group bg-white/5 p-3 rounded-xl hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:text-cyan-400 transition-colors"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Need help? <span className="text-white block mt-1 text-lg font-medium">{contactInfo.phoneDisplay}</span>
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-600">
            &copy; {new Date().getFullYear()} Gamers Federation. All rights reserved.
          </div>
          
          <a 
            href="https://www.akinlajatimileyin.space" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/30 group"
          >
            <span className="text-gray-500 group-hover:text-gray-300">Designed & Developed by</span>
            <span className="text-purple-400 font-medium group-hover:text-purple-300">Akinlaja</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
