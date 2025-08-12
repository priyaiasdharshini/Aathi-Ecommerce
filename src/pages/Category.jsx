// src/pages/Category.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
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
    // Add other categories
  };

  return (
    <>
      {/* <Header /> */}
      <div className="bg-amber-50 min-h-screen">
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-amber-800 mb-8">
            {categoryNames[categorySlug] || categorySlug}
          </h2>
          
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No products found in this category</p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CategoryPage;