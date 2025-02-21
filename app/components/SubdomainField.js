"use client";
const SubdomainField = ({ register, errors, availableError }) => (
  <div>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div>
        <div className="flex items-start">
          <i className="fa-solid fa-earth-africa mr-2 text-[#3B82F6] mt-1"></i>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your online store subdomain
            </label>
            <p className="text-xs text-gray-500">
              A SEO-friendly store name is a crucial part of your success. Make
              sure it aligns with your brand and products.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-2 justify-end">
  <div className="flex items-center border rounded-md w-[311px] md:w-[393.88px]">
    <div>
      <div>
        <input
          type="text"
          {...register("subdomain", {
            required: "Subdomain is required",
            pattern: {
              value: /^[a-zA-Z0-9-]+$/,
              message: "Only letters, numbers, and hyphens are allowed",
            },
          })}
          placeholder="Enter your domain name"
          className={`flex-1 px-2 py-2 border-l focus:outline-none focus:ring-2 focus:ring-purple-400 ${
            errors.subdomain || availableError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {(errors.subdomain || availableError) && (
          <p className="text-red-500 text-sm mt-1 absolute">
            {errors.subdomain?.message || availableError}
          </p>
        )}
      </div>
    </div>
    <span className="px-3 text-gray-500 hidden md:block">.expressitbd.com</span>
  </div>
</div>
    </div>
  </div>
);

export default SubdomainField;
