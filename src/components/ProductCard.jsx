// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import imgUrl from '../assets/yogapose.jpg'

const ProductCard = ({ product, cartItems, setCartItems }) => {

  function handleCartItems(){
    setCartItems(prev=>([
      ...prev,
      product
    ]))
  }

  return (
    <div className="bg-white  rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img 
          // src={product.image} 
          src={imgUrl}
          alt={product.name} 
          className="w-full aspect-square object-cover"
        />
        <div className="md:p-5 p-3">
          <h3 className="md:text-xl text-[15px] font-semibold text-amber-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 md:text-[20px] text-[13px]">{product.description}</p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2" >
            <span className="text-[14px] md:text-lg font-bold text-amber-600">${product.price}</span>
            <button
            onClick={handleCartItems}
             className="bg-amber-600 hover:bg-amber-700 text-white py-1 px-4 rounded text-[13px] md:text-[15px] transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;