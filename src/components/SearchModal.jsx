import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronRight } from 'lucide-react';
import { products } from '../data';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Flatten all products into a single array
  const allProducts = React.useMemo(() => [
    ...products.games.map(p => ({ ...p, type: 'Game' })),
    ...products.consoles.map(p => ({ ...p, type: 'Console' })),
    ...products.laptops.map(p => ({ ...p, type: 'Laptop' }))
  ], []);

  const results = React.useMemo(() => {
    if (query.trim() === '') {
      return [];
    }

    const searchTerms = query.toLowerCase().split(' ');
    return allProducts.filter(product => {
      const matchName = searchTerms.every(term => product.name.toLowerCase().includes(term));
      const matchCategory = product.category.toLowerCase().includes(query.toLowerCase());
      return matchName || matchCategory;
    });
  }, [query, allProducts]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const getProductPath = (type) => {
    switch (type) {
      case 'Game': return '/games';
      case 'Console': return '/consoles';
      case 'Laptop': return '/laptops';
      default: return '/';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Search</h2>
              <button 
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-6 pb-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games, consoles, laptops..."
                  className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/50 transition-all"
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex-grow overflow-y-auto p-6 custom-scrollbar">
              {query && results.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`${getProductPath(product.type)}#product-${product.id}`}
                      onClick={handleClose}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all group"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{product.type}</span>
                          <span className="text-sm font-medium text-gray-400">₦{product.price.toLocaleString()}</span>
                        </div>
                        <h3 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors truncate">{product.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{product.description}</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-600 group-hover:text-white transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
              
              {!query && (
                <div className="text-center py-10 opacity-50">
                  <Search size={32} className="mx-auto mb-3 text-gray-600" />
                  <p className="text-sm text-gray-500">Start typing to search</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
