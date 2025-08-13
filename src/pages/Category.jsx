import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const CategoryPage = ({cartItems, setCartItems}) => {
  const { categorySlug } = useParams();
  
  // Filter products by category
  const categoryProducts = products.filter(
    product => product.category === categorySlug
  );

  // Map category slugs to display names
  const categoryNames = {
    'karungali': 'Karungali',
    'rudraksha': 'Rudraksha',
    'gemstone': 'Gemstone',
    'sandalwood': 'Sandalwood',
    'red-sandalwood': 'Red Sandalwood',
    'pendants-rings': 'Pendants & Rings',
    'home-essentials': 'Home Essentials',
    'body-essentials': 'Body Essentials',
    'rasi-bands': '12 Rasi Bands',
    'special-bracelets': 'Special Bracelets',
  };

  return (
    <>
      {/* <Header /> */}
      <div className="bg-amber-50 min-h-screen">
        <div className="container mx-auto py-8 px-4 sm:px-6">
          {/* Category Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-2">
              {categoryNames[categorySlug] || categorySlug?.replace(/-/g, ' ')}
            </h2>
            <p className="text-amber-600">
              {categoryProducts.length} sacred items
            </p>
          </div>
          
          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
              {categoryProducts.map(product => (
                <ProductCard key={`${product.id}-${product.category}`} product={product} cartItems={cartItems} setCartItems={setCartItems} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No products found in this category</p>
              <button 
                className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm"
                onClick={() => window.history.back()}
              >
                Back to Categories
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CategoryPage;