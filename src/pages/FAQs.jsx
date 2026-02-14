import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus, Search, HelpCircle, ShoppingBag, Truck, ShieldCheck, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data';

const FaqCategory = ({ icon, label, isActive, onClick }) => {
  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
        isActive 
          ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20' 
          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      initial={false}
      className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5 border-purple-500/30' : 'bg-[#0a0a0a] hover:border-white/20'}`}
    >
      <button
        onClick={toggleOpen}
        className="w-full p-6 flex items-center justify-between text-left gap-4"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-purple-400' : 'text-gray-200'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-gray-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'All', label: 'All Questions', icon: HelpCircle },
    { id: 'Orders', label: 'Orders & Payment', icon: ShoppingBag },
    { id: 'Delivery', label: 'Delivery', icon: Truck },
    { id: 'Products', label: 'Products & Warranty', icon: ShieldCheck },
  ];

  const faqs = [
    {
      category: 'Delivery',
      question: "Do you offer delivery nationwide?",
      answer: "Yes, we deliver to all 36 states in Nigeria. Delivery times vary by location: 1-2 days for Lagos, and 3-5 days for other states via our trusted logistics partners."
    },
    {
      category: 'Products',
      question: "Are your products brand new?",
      answer: "Absolutely! We sell 100% brand new, original products in sealed packaging. We also offer a selection of certified pre-owned items which are clearly labeled as 'Used' or 'Open Box'."
    },
    {
      category: 'Orders',
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers for all orders. Cash on Delivery (COD) is available for select locations within Lagos, subject to terms and conditions."
    },
    {
      category: 'Products',
      question: "Can I return a product if it's faulty?",
      answer: "Yes, we have a comprehensive return policy. If you receive a faulty item, report it within 24 hours. We offer replacements or repairs for verified manufacturer defects. Please check our Returns Policy page for full details."
    },
    {
      category: 'Products',
      question: "Do you offer warranty on consoles?",
      answer: "Yes, all brand new consoles come with a standard manufacturer warranty. Our certified used consoles come with a 3-month store warranty for your peace of mind."
    },
    {
      category: 'Orders',
      question: "How can I track my order?",
      answer: "Once your order is dispatched, we will send you a tracking number or waybill details via WhatsApp or Email so you can monitor its progress in real-time."
    },
    {
      category: 'Delivery',
      question: "Can I pick up my order physically?",
      answer: "Yes, we offer pickup options at our Lagos office. Please select 'Pickup' during checkout or inform our sales rep via WhatsApp to schedule a pickup time."
    },
    {
      category: 'Products',
      question: "Do you install games on consoles?",
      answer: "Yes! We offer digital game installation services for PS4, PS5, and Xbox. We can load your console with the latest hits so it's ready to play out of the box."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>FAQs | Gamers Federation</title>
        <meta name="description" content="Find answers to common questions about orders, delivery, warranty, and returns at Gamers Federation." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">help you?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Search our knowledge base or browse categories to find the answers you're looking for.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/10 transition-all text-lg"
            placeholder="Search for questions (e.g. 'delivery', 'warranty')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <FaqCategory
              key={cat.id}
              {...cat}
              isActive={activeCategory === cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
            />
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FaqItem
                key={index}
                {...faq}
                isOpen={openIndex === index}
                toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
              <HelpCircle className="mx-auto h-12 w-12 text-gray-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-300 mb-2">No results found</h3>
              <p className="text-gray-500">
                We couldn't find any answers matching "{searchQuery}". <br />
                Try different keywords or browse by category.
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Can't find the answer you're looking for? Chat with our friendly team via WhatsApp.
          </p>
          <a
            href={`https://wa.me/${contactInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-600/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
