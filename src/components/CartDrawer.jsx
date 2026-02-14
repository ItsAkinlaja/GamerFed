import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { contactInfo } from '../data';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hello Gamers Federation, I would like to place an order for the following items:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (x${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\n*Total Amount:* ₦${getCartTotal().toLocaleString()}`;
    message += "\n\nPlease confirm availability and payment details.";

    const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#121212] border-l border-white/10 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-purple-500" />
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                <span className="bg-white/10 text-xs px-2 py-1 rounded-full text-gray-400">
                  {cartItems.length} items
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Your cart is empty</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Looks like you haven't added anything yet.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-black/20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-white line-clamp-1">{item.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-black/20 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white/10 rounded-md transition-colors"
                          >
                            <Minus size={14} className="text-gray-400" />
                          </button>
                          <span className="text-sm font-medium text-white w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white/10 rounded-md transition-colors"
                          >
                            <Plus size={14} className="text-gray-400" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-purple-400">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors self-start"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#121212]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Total</span>
                  <span className="text-2xl font-bold text-white">
                    ₦{getCartTotal().toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  Checkout via WhatsApp
                </button>
                <p className="text-xs text-center text-gray-500 mt-3">
                  Clicking checkout will open WhatsApp with your order details pre-filled.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
