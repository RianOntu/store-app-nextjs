import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/shop/${product._id}`}>
      <div className="bg-white shadow-md w-375 md:w-[275px] lg:w-[300px]  rounded-lg p-4 hover:shadow-lg transition duration-300">
        <img
          src={product.images[0].optimizeUrl}
          alt={product.name}
          className="w-full h-60 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-green-600 font-bold text-xl mt-2">
          ${product.price}
        </p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
