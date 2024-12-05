import React from 'react';
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-md  p-4 shadow-sm flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-2"
      />
      <h2 className="font-bold text-center">{product.title}</h2>
      <p>Rs{product.price.toFixed(0)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
