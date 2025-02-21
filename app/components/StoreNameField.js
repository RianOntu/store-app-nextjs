'use client'
const StoreNameField = ({ register, errors }) => (
  <div>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div>
        <div className="flex items-start">
          <i className="fa-solid fa-desktop text-[#3B82F6] mr-2 mt-1"></i>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Give your online store a name
            </label>
            <p className="text-xs text-gray-500">
              A great store name is a big part of your success. Make sure it
              aligns with your brand and products.
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
          className={`mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 ${
            errors.storeName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.storeName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.storeName.message}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default StoreNameField;
