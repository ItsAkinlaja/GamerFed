import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductListingPage = ({ title, description, items, gradientFrom, gradientTo }) => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b ${gradientFrom} to-transparent opacity-20`} />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl filter" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl filter" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group backdrop-blur-sm mb-8"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
                {title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {items.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-500">Coming Soon</h3>
            <p className="text-gray-600 mt-2">Check back later for new arrivals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
