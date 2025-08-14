import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/Category';
import ProductPage from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/category/:categorySlug" 
                element={<CategoryPage />} 
              />
              <Route 
                path="/product/:productId" 
                element={<ProductPage />} 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;