'use client'
const EmailField = ({ register, errors }) => (
  <div>
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div>
        <div className="flex">
          <i className="fa-solid fa-envelope mr-2 text-[#3B82F6] mt-1"></i>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Store contact email
            </label>
            <p className="text-xs text-gray-500">
              This is the email you'll use to send notifications to <br /> and
              receive orders from customers.
            </p>
          </div>
        </div>
      </div>
      <div>
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
          className={`mt-2 w-[311px] md:w-[393.88px] px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 ${
            errors.storeName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
    </div>
  </div>
);

export default EmailField;
