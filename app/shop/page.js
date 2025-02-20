import React from "react";
import ProductCard from "../pages/_productCard";
async function getStoreData() {
  const res = await fetch(
    "https://glore-bd-backend-node-mongo.vercel.app/api/product"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch store data");
  }

  return res.json();
}
async function Page() {
  const storeData = await getStoreData();
  console.log(storeData);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-[80%] place-content-center mx-auto">
        {storeData.data.map((data) => (
          <ProductCard product={data} />
        ))}
      </div>
    </>
  );
}

export default Page;
