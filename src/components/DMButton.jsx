import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data';

const DMButton = () => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to compact mode after scrolling 100px
      setIsCompact(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${contactInfo.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 group border border-purple-400/30 backdrop-blur-sm overflow-hidden rounded-full ${
        isCompact ? 'p-3' : 'px-6 py-3'
      }`}
    >
      <div 
        className={`flex flex-col items-start whitespace-nowrap overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isCompact ? 'max-w-0 opacity-0 mr-0' : 'max-w-[200px] opacity-100 mr-3'
        }`}
      >
        <span className="text-xs text-purple-200 font-medium">Can't find what you are looking for?</span>
        <span className="text-sm font-bold">Send a DM</span>
      </div>
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default DMButton;
