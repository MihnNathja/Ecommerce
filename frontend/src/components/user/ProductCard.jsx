import React from 'react';
import { FaStar } from 'react-icons/fa';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={product.name}
        className="w-full h-48 object-contain rounded"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-semibold text-base text-gray-800 mb-1 line-clamp-2">
          {product.name}
        </h2>

        <p className="text-red-500 font-bold text-sm mb-2">
          {product.price.toLocaleString()}₫
        </p>

        <div className="flex items-center text-yellow-400 text-xs mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        <button
          onClick={() => onAddToCart({ productId: product._id })}
          className="mt-auto w-full py-2 text-sm font-semibold text-white rounded bg-orange-500 hover:bg-orange-600"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
