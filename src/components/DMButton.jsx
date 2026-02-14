import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data';

const DMButton = () => {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group border border-purple-400/30 backdrop-blur-sm"
    >
      <div className="flex flex-col items-start">
        <span className="text-xs text-purple-200 font-medium">Can't find your game?</span>
        <span className="text-sm font-bold">Send a DM</span>
      </div>
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default DMButton;
