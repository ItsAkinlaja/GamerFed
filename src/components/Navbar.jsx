import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Games', href: isHome ? '#games' : '/#games' },
    { name: 'Consoles', href: isHome ? '#consoles' : '/#consoles' },
    { name: 'Laptops', href: isHome ? '#laptops' : '/#laptops' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src={logo} alt="Gamers Federation" className="h-12 md:h-16 w-auto transition-all duration-300" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-300 hover:text-purple-400 hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-white hover:bg-white/5 p-2 rounded-full transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
            {isHome ? (
              <a 
                href="#games"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#games');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4" />
                Shop Now
              </a>
            ) : (
              <Link 
                to="/#games"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Shop Now
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/5"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
