'use client'
const CategoryField = ({ register, errors }) => (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <div className="flex">
            <i className="fa-solid fa-shapes mr-2 text-[#3B82F6] mt-1"></i>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What's your Category?
              </label>
              <p className="text-xs text-gray-500">
                Set your store's default category so that we can optimize store
                access and speed for your customers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <select
            {...register("category", { required: "Category is required" })}
            className={`mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 ${
                errors.storeName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          >
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
  
  export default CategoryField;