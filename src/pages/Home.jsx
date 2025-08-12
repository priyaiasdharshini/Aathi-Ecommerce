// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  return (
    <>
      {/* <Header /> */}
      <div className="bg-amber-50 min-h-screen">
        {/* Category Navigation */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex space-x-6 whitespace-nowrap">
              {categories.map((category) => (
                <Link 
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center py-20 px-4">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">SACRED COLLECTION</h1>
          <p className="text-xl text-amber-700 mb-8">Authentic spiritual items for divine living</p>
          <Link 
            to="/category/rudraksha" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            SHOP NOW ►
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;