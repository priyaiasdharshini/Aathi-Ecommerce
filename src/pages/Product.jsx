// src/pages/Product.jsx
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <>
        {/* <Header /> */}
        <div className="bg-amber-50 min-h-screen flex items-center justify-center">
          <p className="text-2xl text-amber-800">Product not found</p>
        </div>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-amber-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-8 md:w-1/2">
                <h1 className="text-3xl font-bold text-amber-800 mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-700 mb-2">Quantity</label>
                  <select className="border border-gray-300 rounded px-3 py-2 w-20">
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded transition duration-300 mb-4">
                  Add to Cart
                </button>
                
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Product Details</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Authentic spiritual item</li>
                    <li>• Handcrafted with devotion</li>
                    <li>• Blessed according to tradition</li>
                    <li>• Free shipping on orders over $50</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;