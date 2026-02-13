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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md"
        >
          <div className="max-w-4xl mx-auto px-4 pt-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Search</h2>
              <button 
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games, consoles, laptops..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Results */}
            <div className="flex-grow overflow-y-auto pb-8 custom-scrollbar">
              {query && results.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to="#" // In a real app, this would link to a product detail page
                      onClick={handleClose}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all group"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{product.type}</span>
                          <span className="text-sm font-medium text-gray-400">₦{product.price.toLocaleString()}</span>
                        </div>
                        <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                      </div>
                      <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              )}
              
              {!query && (
                <div className="text-center py-20 opacity-50">
                  <Search size={48} className="mx-auto mb-4 text-gray-600" />
                  <p className="text-gray-500">Start typing to search for products</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
