import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import imgUrl from '../assets/yogapose.jpg'; // Fallback image

const ProductCard = ({ product }) => {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation(); // Stop event bubbling
    
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const currentQuantityInCart = getItemQuantity(product.id);
  
  // Use product image if available and no error, otherwise use fallback
  const imageSrc = (product.image && !imageError) ? product.image : imgUrl;
   
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[280px] mx-auto">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container - Fixed aspect ratio */}
        <div className="relative w-full aspect-square overflow-hidden">
          <img 
            src={imageSrc}
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
          />
          {/* Cart quantity badge */}
          {currentQuantityInCart > 0 && (
            <div className="absolute top-2 right-2">
              <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                {currentQuantityInCart}
              </span>
            </div>
          )}
        </div>
        
        {/* Content Container - Compact layout */}
        <div className="p-3 space-y-2">
          {/* Product Name - Truncated for compact design */}
          <h3 className="font-semibold text-amber-800 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          
          {/* Price and Add to Cart Row */}
          <div className="flex items-center justify-between gap-2">
            <span className="font-bold text-amber-600 text-lg">
              ${product.price}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                addedToCart 
                  ? 'bg-green-500 text-white scale-95' 
                  : 'bg-amber-600 hover:bg-amber-700 text-white hover:scale-105 active:scale-95'
              }`}
            >
              {addedToCart ? '✓' : '+'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;