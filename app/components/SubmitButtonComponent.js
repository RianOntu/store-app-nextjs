"use client";

const SubmitButton = ({ isLoading, isValid, availableError }) => (
  <div className="flex justify-end mt-[50px]">
    <button
      type="submit"
      disabled={isLoading || !isValid || availableError}
      className="create_store_btn px-3 bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-75"
    >
      {isLoading ? "Creating Store..." : "Create Store"}
    </button>
  </div>
);

export default SubmitButton;
