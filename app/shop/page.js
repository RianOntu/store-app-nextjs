"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../pages/_productCard";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Banner";

const Page = () => {
  const [storeData, setStoreData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const res = await fetch(
          "https://glore-bd-backend-node-mongo.vercel.app/api/product"
        );

        if (!res.ok) throw new Error("Failed to fetch store data");

        const data = await res.json();
        console.log(data);
        
        setStoreData(data.data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchStoreData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection/>
      <div className="max-w-[90%] xl:max-w-[1300px] mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 place-content-center mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-3 xl:gap-2">
          {storeData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
