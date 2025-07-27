import React from 'react';
import ProductCard from '../components/ProductCard';

const demoProducts = [
  { id: 1, title: 'Valorant Points 1200', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'CS2 AK-47 Skin', price: 25, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Robux 400', price: 5, image: 'https://via.placeholder.com/150' },
];

function Products({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {demoProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
