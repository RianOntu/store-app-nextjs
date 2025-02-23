import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import FaceBook from "@/app/pages/_faceBook";
import LinkedIn from "@/app/pages/linkedIn";
import Twitter from "@/app/pages/twitter";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

async function getProduct(id) {
  const response = await fetch(
    `https://glore-bd-backend-node-mongo.vercel.app/api/product`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  console.log("API Response:", products);

  const productList = products.data || products;
  if (!Array.isArray(productList)) {
    throw new Error("API response is not an array");
  }

  const singleProduct = productList.find((product) => product._id === id);
  if (!singleProduct) {
    throw new Error("Product not found");
  }
  return singleProduct;
}

export async function generateMetadata({ params }) {
  const singleProduct = await getProduct(params.id);

  return {
    title: singleProduct?.name?.slice(0, 100),
    description: singleProduct?.description?.slice(0, 100),
    openGraph: {
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL
          }/api/og?image=${encodeURIComponent(
            singleProduct?.images?.[0]?.optimizeUrl || ""
          )}`,
          width: 1200,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const id = params.id;
  const product = await getProduct(id);
  console.log(product);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 px-6">
  <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white text-center tracking-wide">
    {product.name}
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Product Images */}
    {product.images && product.images.length > 0 ? (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image.optimizeUrl}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-[464px] object-cover rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500"
            />
          ))}
        </div>
        <div className="col-span-2">
          <iframe
            className="w-full h-[464px] rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500"
            src={product.video.secure_url}
            title={product.video.public_id}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ) : (
      <img
        src="https://via.placeholder.com/300x200"
        alt="No image available"
        className="w-full h-48 object-cover rounded-lg shadow-lg col-span-2"
      />
    )}

    {/* Product Info */}
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          {product.description || "No description available."}
        </p>
        <p className="text-gray-900 dark:text-white font-bold text-2xl mb-6">
          ${product.price ? product.price : "N/A"}
        </p>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-6 py-3 text-sm font-semibold text-gray-700 dark:text-white mb-6">
          {product.category?.name || "Uncategorized"}
        </span>
      </div>

      {/* Buttons & Social Sharing */}
      <div className="flex flex-wrap gap-6">
        <button className="bg-blue-600 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-yellow-500 transition">
          Add to Cart
        </button>
        <div className="flex gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/shop/${product._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 text-3xl hover:text-blue-700 transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href={`https://twitter.com/share?url=${process.env.NEXT_PUBLIC_SITE_URL}/shop/${product._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 dark:text-blue-300 text-3xl hover:text-blue-500 transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}/shop/${product._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-500 text-3xl hover:text-blue-800 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}
