import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import ShippingPolicy from './pages/ShippingPolicy';
import Returns from './pages/Returns';
import Services from './pages/Services';
import ProductListingPage from './pages/ProductListingPage';
import { products } from './data';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import DMButton from './components/DMButton';

// Simple ScrollToTop component to ensure pages start at top
const ScrollToTopWrapper = () => {
  return <ScrollToTop />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-purple-200 flex flex-col">
        <Navbar />
        <ScrollToTopWrapper />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/services" element={<Services />} />
            
            {/* Product Listing Pages */}
            <Route 
              path="/games" 
              element={
                <ProductListingPage 
                  title="Trending Games" 
                  description="Discover the hottest titles and upcoming releases for all platforms."
                  items={products.games}
                  gradientFrom="from-purple-500"
                  gradientTo="to-blue-500"
                />
              } 
            />
            <Route 
              path="/consoles" 
              element={
                <ProductListingPage 
                  title="Next-Gen Consoles" 
                  description="Experience the future of gaming with the latest hardware."
                  items={products.consoles}
                  gradientFrom="from-blue-500"
                  gradientTo="to-cyan-500"
                />
              } 
            />
            <Route 
              path="/laptops" 
              element={
                <ProductListingPage 
                  title="Gaming Laptops" 
                  description="Power meets portability. Dominate the game anywhere."
                  items={products.laptops}
                  gradientFrom="from-red-500"
                  gradientTo="to-orange-500"
                />
              } 
            />
          </Routes>
        </main>

        <BackToTopButton />
        <DMButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
