import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag, Star } from 'lucide-react';
import { contactInfo } from '../data';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    const message = `Hello Gamers Federation, I am interested in buying *${product.name}* for ₦${product.price.toLocaleString()}. Is it available?`;
    const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-[#121212] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/10 rounded-full">
            {product.category}
          </span>
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
          <button
            onClick={handleBuyNow}
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl hover:scale-105"
          >
            <MessageCircle size={18} />
            Quick Buy
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 relative z-20 -mt-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 h-10 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-end justify-between border-t border-white/5 pt-4">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Price</span>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              ₦{product.price.toLocaleString()}
            </span>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-white/5 hover:bg-purple-600 rounded-xl text-white transition-colors duration-300 group/btn"
          >
            <ShoppingBag size={20} className="group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
