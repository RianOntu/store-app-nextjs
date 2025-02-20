import React from "react";

async function getProduct(id) {
  const response = await fetch(
    `https://glore-bd-backend-node-mongo.vercel.app/api/product`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  const singleProduct = products?.data?.find((product) => product._id === id);
  if (!singleProduct) {
    throw new Error("Product not found");
  }
  return singleProduct;
}

export default async function Page({ params }) {
  const id = params.id;
  const product = await getProduct(id);
  console.log("images", product?.images);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        {product.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {product.images && product.images.length > 0 ? (
          product.images.map((image, index) => (
            <img
              key={index}
              src={image.optimizeUrl}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          ))
        ) : (
          <img
            src="https://via.placeholder.com/300x200"
            alt="No image available"
            className="w-full h-48 object-cover rounded-lg shadow-md col-span-2"
          />
        )}

        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg shadow-md h-[400px]">
          <div className="pt-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {product.name}
            </h2>
            <p className="text-gray-700 text-base mb-4">
              {product.description || "No description available."}
            </p>
            <p className="text-gray-900 font-bold text-xl mb-4">
              ${product.price ? product.price : "N/A"}
            </p>
            <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mb-4">
              {product.category.name || "Uncategorized"}
            </span>
          </div>
          <button className=" bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
