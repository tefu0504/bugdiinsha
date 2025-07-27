import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <img src={product.image} alt={product.title} className="mx-auto mb-2 rounded" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-purple-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
