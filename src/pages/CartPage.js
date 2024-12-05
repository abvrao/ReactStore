import React from 'react';

const CartPage = ({ cart, updateCart, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-md shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCart(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateCart(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div>
                <p>Total: Rs.{(item.price * item.quantity * 85).toFixed(0)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <p className="font-bold">Total: Rs.{(totalPrice * 85).toFixed(0)}</p>
            <p className="text-green-600 font-bold">
              Discounted Total: Rs.{(discountedPrice *85).toFixed(0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
