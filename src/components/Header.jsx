import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Cart from './Cart'; // Import the Cart component if you created it

const Header = () => {
  const { cartItems, getCartItemsCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Safely get cart count with fallback
  const cartCount = cartItems ? getCartItemsCount() : 0;

  const categories = [
    { name: 'Karungali', slug: 'karungali' },
    { name: 'Rudraksha', slug: 'rudraksha' },
    { name: 'Gemstone', slug: 'gemstone' },
    { name: 'Sandalwood', slug: 'sandalwood' },
    { name: 'Red Sandalwood', slug: 'red-sandalwood' },
    { name: 'Pendants & Rings', slug: 'pendants-rings' },
    { name: 'Home Essentials', slug: 'home-essentials' },
    { name: 'Body Essentials', slug: 'body-essentials' },
    { name: '12 Rasi Bands', slug: 'rasi-bands' },
    { name: 'Special Bracelets', slug: 'special-bracelets' },
  ];

  return (
    <>
      <header className="bg-amber-300 text-amber-900 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              AathiLife
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-amber-200 transition duration-300">
                Home
              </Link>
              <div className="relative group">
                <button className="hover:text-amber-200 transition duration-300">
                  Categories
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md mt-1 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 hover:bg-amber-100 first:rounded-t-md last:rounded-b-md"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/about" className="hover:text-amber-200 transition duration-300">
                About
              </Link>
              <Link to="/contact" className="hover:text-amber-200 transition duration-300">
                Contact
              </Link>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-amber-200 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8-2M7 13l-1.8 2M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-amber-700 py-4">
              <nav className="space-y-2">
                <Link 
                  to="/" 
                  className="block py-2 hover:text-amber-200 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="py-2">
                  <span className="block text-amber-200 font-semibold mb-2">Categories</span>
                  <div className="ml-4 space-y-1">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className="block py-1 text-sm hover:text-amber-200 transition duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link 
                  to="/about" 
                  className="block py-2 hover:text-amber-200 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2 hover:text-amber-200 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Sidebar - Only render if Cart component exists */}
      {typeof Cart !== 'undefined' && (
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
};

export default Header;