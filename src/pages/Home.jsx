import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Reviews from '../components/Reviews';
import ServicesPreview from '../components/ServicesPreview';
import { products } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Section = ({ title, id, items, className, viewMoreLink }) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative ${className}`}>
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="h-8 md:h-12 w-1.5 md:w-2 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              {title}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {items.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {viewMoreLink && (
          <div className="flex justify-center mt-8">
            <Link 
              to={viewMoreLink}
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All {title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gamers Federation | Your Ultimate Gaming Store</title>
        <meta name="description" content="Premium gaming store in Nigeria. Shop latest PS5, Xbox, Gaming Laptops, and PC Games at best prices." />
      </Helmet>
      <Hero />
      
      <main className="relative z-10">
        <Section 
          title="Trending Games" 
          id="games" 
          items={products.games}
          className="bg-[#050505]" 
          viewMoreLink="/games"
        />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-blue-900/5 to-purple-900/5 pointer-events-none" />
          <Section 
            title="Next-Gen Consoles" 
            id="consoles" 
            items={products.consoles}
            className="" 
            viewMoreLink="/consoles"
          />
        </div>

        <Section 
          title="Gaming Laptops" 
          id="laptops" 
          items={products.laptops}
          className="bg-[#050505]" 
          viewMoreLink="/laptops"
        />
        
        <ServicesPreview />

        <Reviews />
      </main>
    </>
  );
};

export default Home;
