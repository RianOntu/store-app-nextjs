"use client";

import Link from "next/link";

const ProductCard = ({ product }) => {
  console.log(product.images[0]);
  console.log(product.category);

  return (
    <Link href={`/shop/${product._id}`}>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 h-[400px]">
      <img
        className="w-full h-60 object-cover"
        src={product.images[0].optimizeUrl}
        alt="Product"
      />

      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{product.name}</h3>

        <p className="text-gray-700 text-base mb-2">{product.description}</p>

        <p className="text-gray-900 font-semibold text-lg mb-2">
          ${product.price}
        </p>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {product.category.name}
        </span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
