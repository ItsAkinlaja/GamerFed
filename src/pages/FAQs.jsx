import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-purple-400 transition-colors">
          {question}
        </span>
        <span className={`p-2 rounded-full bg-white/5 transition-colors ${isOpen ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "Do you offer delivery nationwide?",
      answer: "Yes, we deliver to all states in Nigeria. Delivery times vary by location: 1-2 days for Lagos, and 3-5 days for other states."
    },
    {
      question: "Are your products brand new?",
      answer: "Absolutely! We sell 100% brand new, original products. All consoles and laptops come with manufacturer warranties."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers and cash on delivery for orders within Lagos (terms apply). For nationwide orders, payment confirms shipping."
    },
    {
      question: "Can I return a product if it's faulty?",
      answer: "Yes, we have a return policy for faulty items. Please check our Returns Policy page for detailed terms and conditions."
    },
    {
      question: "Do you sell used or UK used items?",
      answer: "We primarily focus on brand new items. However, we occasionally stock certified pre-owned items which will be clearly labeled as such."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is dispatched, we will send you a tracking number or waybill details via WhatsApp or Email."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-center">
          FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">QUESTIONS</span>
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Got questions? We've got answers.
        </p>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
