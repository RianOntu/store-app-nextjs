const LocationField = ({ register, errors }) => (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <div className="flex">
            <i className="fa-solid fa-location-dot mr-2 text-[#3B82F6] mt-1"></i>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Where's your store located?
              </label>
              <p className="text-xs text-gray-500">
                Set your store's default location so we can optimize store access
                and speed for your customers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <select
            {...register("location", { required: "Location is required" })}
            className="mt-2 w-full md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
          >
            <option value="Bangladesh">Bangladesh</option>
          </select>
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
  
  export default LocationField;