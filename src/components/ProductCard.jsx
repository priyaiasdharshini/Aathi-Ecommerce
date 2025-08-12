// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-amber-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-amber-600">${product.price}</span>
            <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;