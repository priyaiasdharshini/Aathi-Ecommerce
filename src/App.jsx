// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/Category';
import ProductPage from './pages/Product'; // You'll need to create this
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header cartItems={cartItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categorySlug" element={<CategoryPage cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/product/:productId" element={<ProductPage cartItems={cartItems} setCartItems={setCartItems} />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;