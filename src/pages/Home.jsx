// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import StoreFeatures from '../components/StoreFeatures';
import Featuresection from '../components/Featuresection';
import SpiritualBanner from '../components/SpiritualBanner';
import Sacredofferbar from '../components/Sacredofferbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'KARUNGALI', slug: 'karungali' },
    { name: 'RUDRAKSHA', slug: 'rudraksha' },
    { name: 'GEMSTONE', slug: 'gemstone' },
    { name: 'SANDALWOOD', slug: 'sandalwood' },
    { name: 'RED SANDALWOOD', slug: 'red-sandalwood' },
    { name: 'PENDANTS & RING', slug: 'pendants-ring' },
    { name: 'HOME ESSENTIALS', slug: 'home-essentials' },
    { name: 'BODY ESSENTIALS', slug: 'body-essentials' },
    { name: '12 RASI BANDS', slug: 'rasi-bands' },
    { name: 'SPL BRACELETS', slug: 'special-bracelets' }
  ];

  const slides = [
    {
      image: "/sample.jpg",
      title: "SACRED COLLECTION",
      description: "Authentic spiritual items for divine living",
      link: "/category/karungali",
    },
    {
      image: "https://i.ibb.co/Y8wBQsh/spiritual2.jpg",
      title: "RUDRAKSHA MALA",
      description: "Pure, energized, and ready for spiritual practice",
      link: "/category/rudraksha",
    },
    {
      image: "https://i.ibb.co/q0wqctD/spiritual3.jpg",
      title: "GEMSTONES & ENERGY",
      description: "Harness the power of nature",
      link: "/category/gemstone",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="bg-[#FFF9E6] min-h-screen">
        
        {/* Category Navigation */}
        <div className="bg-gradient-to-r from-amber-300 to-yellow-200 shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex space-x-6 whitespace-nowrap">
              {categories.map((category) => (
                <Link 
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="text-[#6B4F2A] hover:text-orange-700 font-medium transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay and content */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-end pr-6 sm:pr-8 md:pr-12 lg:pr-20">
                <div className="text-right text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-block mt-5 bg-amber-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition"
                  >
                    SHOP NOW ►
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${currentSlide === i ? "bg-amber-400" : "bg-white/60"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <StoreFeatures />
        <Featuresection />
        <SpiritualBanner />
        <Sacredofferbar />
       

      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
