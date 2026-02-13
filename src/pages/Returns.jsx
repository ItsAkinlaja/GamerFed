import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, ShieldCheck, XCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
          RETURNS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">POLICY</span>
        </h1>

        <div className="space-y-8">
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            At Gamers Federation, we want you to be completely satisfied with your purchase. However, we understand that sometimes things might not go as planned.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="mb-4 text-purple-400">
                <RefreshCcw size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">7-Day Return Window</h3>
              <p className="text-sm text-gray-400">
                Items can be returned within 7 days of delivery if they are faulty or not as described.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="mb-4 text-green-400">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Original Condition</h3>
              <p className="text-sm text-gray-400">
                Items must be returned in their original packaging with all accessories and seals intact.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="mb-4 text-red-400">
                <XCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Non-Returnable</h3>
              <p className="text-sm text-gray-400">
                Software, gift cards, and items damaged by user negligence cannot be returned.
              </p>
            </div>
          </div>

          <div className="space-y-8 mt-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Eligibility for Returns</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-400">
                <li>The item was delivered in a defective or damaged condition.</li>
                <li>The wrong item was delivered (different from what was ordered).</li>
                <li>The item is significantly different from the description on our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">How to Initiate a Return</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ol className="list-decimal list-inside space-y-4 text-gray-400">
                  <li>
                    <strong className="text-gray-200">Contact Support:</strong> Reach out to us via WhatsApp or Email within 24 hours of receiving your order to report the issue.
                  </li>
                  <li>
                    <strong className="text-gray-200">Provide Evidence:</strong> Send us photos or videos clearly showing the defect or issue.
                  </li>
                  <li>
                    <strong className="text-gray-200">Approval:</strong> Once approved, we will provide instructions on how to return the item.
                  </li>
                  <li>
                    <strong className="text-gray-200">Resolution:</strong> Upon receipt and inspection, we will offer a replacement, repair, or refund depending on the situation.
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Refunds</h2>
              <p className="text-gray-400 leading-relaxed">
                Refunds are processed within 3-5 business days after the returned item has been inspected and approved. Refunds will be made to the original payment method or bank account provided.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Returns;
