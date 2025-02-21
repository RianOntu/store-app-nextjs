'use client'
const CurrencyField = ({ register, errors }) => (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <div className="flex">
            <i className="fa-solid fa-dollar-sign mr-2 text-[#3B82F6] mt-1"></i>
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
        <div>
          <select
            {...register("currency", { required: "Currency is required" })}
            className={`mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 ${
                errors.storeName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          >
            <option value="BDT">BDT (Taka)</option>
            <option value="USD">USD (Dollar)</option>
          </select>
          {errors.currency && (
            <p className="text-red-500 text-sm mt-1">
              {errors.currency.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
  
  export default CurrencyField;