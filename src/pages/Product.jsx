import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import imgUrl from '../assets/yogapose.jpg'; // Fallback image

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const product = products.find(p => p.id === parseInt(productId));
       
  if (!product) {
    return (
      <div className="bg-amber-50 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-amber-800 mb-4">Product not found</p>
          <Link 
            to="/" 
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
   
  const handleAddToCart = () => {
    addToCart(product, selectedQuantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
   
  const handleImageError = () => {
    setImageError(true);
  };
   
  const currentQuantityInCart = getItemQuantity(product.id);
  
  // Use product image if available and no error, otherwise use fallback
  const imageSrc = (product.image && !imageError) ? product.image : imgUrl;
   
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-amber-600">
            <Link to="/" className="hover:text-amber-800">Home</Link>
            <span>/</span>
            {product.category && (
              <>
                <Link 
                  to={`/category/${product.category}`} 
                  className="hover:text-amber-800 capitalize"
                >
                  {product.category.replace(/-/g, ' ')}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-500">{product.name}</span>
          </div>
        </nav>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img 
                  src={imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
            </div>
                           
            {/* Product Details */}
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-amber-800 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Product Category */}
              {product.category && (
                <div className="mb-4">
                  <Link 
                    to={`/category/${product.category}`}
                    className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition duration-300"
                  >
                    {product.category.replace(/-/g, ' ')}
                  </Link>
                </div>
              )}
                               
              <div className="mb-6">
                <span className="text-2xl font-bold text-amber-600">${product.price}</span>
              </div>
                               
              {/* Show current quantity in cart */}
              {currentQuantityInCart > 0 && (
                <div className="mb-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    Currently in cart: {currentQuantityInCart} item(s)
                  </p>
                </div>
              )}
                               
              <div className="mb-8">
                <label className="block text-gray-700 mb-2">Quantity</label>
                <select 
                  className="border border-gray-300 rounded px-3 py-2 w-20"
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
                               
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`w-full font-bold py-3 px-4 rounded transition duration-300 mb-4 ${
                  addedToCart 
                    ? 'bg-green-600 text-white' 
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
              >
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>

              {/* Back to Category Button */}
              {product.category && (
                <Link
                  to={`/category/${product.category}`}
                  className="w-full block text-center bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 transition duration-300 mb-4"
                >
                  ← Back to {product.category.replace(/-/g, ' ')} Products
                </Link>
              )}
                               
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Product Details</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Authentic spiritual item</li>
                  <li>• Handcrafted with devotion</li>
                  <li>• Blessed according to tradition</li>
                  <li>• Free shipping on orders over $50</li>
                  {product.id && <li>• Product ID: #{product.id}</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;