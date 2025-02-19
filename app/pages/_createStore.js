"use client";
import { useForm } from "react-hook-form";

const CreateStore = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900">Create a store</h2>
        <p className="text-gray-500 text-sm mt-1">
          Add your basic store information and complete the setup
        </p>
        <hr className="text-[#E5E7EB] mt-3 mb-3" />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Store Name */}
          <div>
            <div className="flex flex-col md:flex-row items-center  gap-4">
              <div>
                <div className="flex items-start">
                  <i className="fa-solid fa-desktop text-[#3B82F6] mr-2 mt-1"></i>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Give your online store a name
                    </label>
                    <p className="text-xs text-gray-500">
                      A great store name is a big part of your success. Make
                      sure it aligns with your brand and products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[393.88px]">
                <input
                  type="text"
                  {...register("storeName", {
                    required: "Store name is required",
                    minLength: {
                      value: 3,
                      message: "Store name must be at least 3 characters long",
                    },
                  })}
                  placeholder="How'd you like to call your store?"
                  className="mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
                />
                {errors.storeName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.storeName.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Subdomain */}
          <div>
            <div className="flex flex-col md:flex-row items-center  gap-4">
              <div className="justify-start">
                <div className="flex items-start">
                  <i class="fa-solid fa-earth-africa mr-2 text-[#3B82F6] mt-1"></i>
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Your online store subdomain
                    </label>
                    <p className="text-xs text-gray-500">
                      A SEO-friendly store name is a crucial part of your
                      success. Make sure it aligns with your brand and products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex mt-2 justify-end">
                <div className="flex items-center border rounded-md w-full md:w-[393.88px]">
                  <div>
                    <div>
                    <input
                      type="text"
                      {...register("subdomain", {
                        required: "Subdomain is required",
                        pattern: {
                          value: /^[a-zA-Z0-9-]+$/,
                          message:
                            "Only letters, numbers, and hyphens are allowed",
                        },
                      })}
                      placeholder="Enter your domain name"
                      className="flex-1 px-2 py-2 border-l focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                     {errors.subdomain && (
                      <p className="text-red-500 text-sm mt-1 absolute">
                        {errors.subdomain.message}
                      </p>
                    )}
                    </div>
                 
                  </div>

                  {/* Right Placeholder */}
                  <span className="px-3 text-gray-500 ">.expressitbd.com</span>
               
                </div>
              
              </div>
            </div>
          </div>

          {/* Store Location */}
          <div>
            <div className="flex flex-col md:flex-row items-center  justify-between">
              <div>
                <div className="flex">
                  <i class="fa-solid fa-location-dot mr-2 text-[#3B82F6] mt-1"></i>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Where's your store located?
                    </label>
                    <p className="text-xs text-gray-500">
                      Set your store's default location so we can optimize store
                      access and speed for your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="justify-end">
                <select
                  {...register("location")}
                  className="mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
                >
                  <option>Bangladesh</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex">
                  <i class="fa-solid fa-shapes mr-2 text-[#3B82F6] mt-1"></i>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      What's your Category?
                    </label>
                    <p className="text-xs text-gray-500">
                      Set your store's default category so that we can optimize
                      store access and speed for your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <select
                  {...register("category")}
                  className="mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
                >
                  <option>Fashion</option>
                  <option>Electronics</option>
                  <option>Grocery</option>
                </select>
              </div>
            </div>
          </div>

          {/* Currency */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex">
                  <i class="fa-solid fa-dollar-sign mr-2 text-[#3B82F6] mt-1"></i>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Choose store currency
                    </label>
                    <p className="text-xs text-gray-500">
                      This is the main currency you wish to sell in.
                    </p>
                  </div>
                </div>
              </div>
              <div className="justify-end">
                <select
                  {...register("currency")}
                  className="mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
                >
                  <option>BDT (Taka)</option>
                  <option>USD (Dollar)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Store Email */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex">
                  <i class="fa-solid fa-envelope mr-2 text-[#3B82F6] mt-1"></i>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Store contact email
                    </label>
                    <p className="text-xs text-gray-500">
                      This is the email you'll use to send notifications to{" "}
                      <br /> and receive orders from customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="justify-end">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="you@example.com"
                  className="mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-[50px]">
            <button
              type="submit"
              className="create_store_btn px-3 bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
            >
              Create store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
