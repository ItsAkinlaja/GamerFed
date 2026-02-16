import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { 
    id: 5,
    name: "Nifemi",
    location: "Osogbo",
    content: "The games you installed on my PC have been playing smoothly, especially FIFA 22 and GTA V. Customer service is top notch. 08149142884",
    rating: 5,
    initials: "NI",
    color: "bg-indigo-600"
  },
  { 
    id: 6,
    name: "Victor",
    location: "Nigeria",
    content: "Your services are great and reliable. No ish with the gadgets (monitor, consoles, pad) so far, and the price is moderate compared with other online vendors. +234 810 872 2175",
    rating: 5,
    initials: "BJ",
    color: "bg-yellow-600"
  },
  {
    id: 1,
    name: "Chinedu Okafor",
    location: "Lagos",
    content: "Omo, this PS5 is fire! Delivery was super fast to Lekki. Best price I found in Lagos. Highly recommend for any serious gamer.",
    rating: 5,
    initials: "CO",
    color: "bg-purple-600"
  },
  { 
    id: 2,
    name: "Amina Yusuf",
    location: "Abuja",
    content: "Got my gaming laptop here and it's been perfect for both work and play. Everything runs smoothly.",
    rating: 5,
    initials: "AY",
    color: "bg-blue-600"
  },
  { 
    id: 3,
    name: "Tunde Bakare",
    location: "Ibadan",
    content: "The controllers are original, no drifting issues at all. GamerFed is the real deal for gamers in Naija. Will definitely buy again.",
    rating: 5,
    initials: "TB",
    color: "bg-green-600"
  },
  {
    id: 4,
    name: "Funke Adebayo",
    location: "Port Harcourt",
    content: "The graphics on this new laptop are insane! Runs COD at max settings smoothly. Thanks for the quick delivery to PH!",
    rating: 5,
    initials: "FA",
    color: "bg-pink-600"
  }
];

const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group relative"
  >
    <div className="absolute -top-4 -right-4 bg-purple-600/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Quote className="text-purple-400 w-6 h-6" />
    </div>

    <div className="flex items-center gap-4 mb-4">
      <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
        {review.initials}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg">{review.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{review.location}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <div className="flex items-center gap-1 text-green-400">
            <CheckCircle className="w-3 h-3" />
            <span className="text-xs font-medium">Verified Gamer</span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap-1 mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
    </div>

    <p className="text-gray-300 leading-relaxed italic">
      "{review.content}"
    </p>
  </motion.div>
);

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
            Gamer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Feedback</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our community of Nigerian gamers has to say about their experience with Gamers Federation.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const start = slideIndex * itemsPerSlide;
                const group = reviews.slice(start, start + itemsPerSlide);

                return (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {group.map((review, index) => (
                        <ReviewCard key={review.id} review={review} index={index} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
