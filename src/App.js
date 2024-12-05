import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <header className="bg-orange-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold hover:underline">
              Store
            </Link>
            <Link
              to="/cart"
              className="text-lg bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </Link>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
