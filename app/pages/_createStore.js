"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import StoreFormHeader from "../components/StoreFormHeader";
import StoreFormFields from "../components/StoreFormFields";
import SubmitButton from "../components/SubmitButtonComponent";

const CreateStore = () => {
  const [availableError, setAvailableError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      reset({}, { keepValues: true });
      setAvailableError("");

      const { storeName, subdomain, location, category, currency, email } =
        data;
      const checkResponse = await fetch(
        `https://interview-task-green.vercel.app/task/domains/check/${subdomain}.expressitbd.com`
      );
      const checkResult = await checkResponse.json();

      if (!checkResult.data.taken) {
        const createResponse = await fetch(
          `https://interview-task-green.vercel.app/task/stores/create`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: storeName,
              currency,
              country: location,
              domain: subdomain,
              category,
              email,
            }),
          }
        );
        const createResult = await createResponse.json();
        console.log("result", createResult);
        toast.success("🦄 Store created successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        reset();
        setAvailableError("");
        router.push("/shop");
      } else {
        setAvailableError("Not available domain! Re-enter");
        setIsLoading(false);
        reset({}, { keepValues: true });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Sorry, something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset({}, { keepValues: true });
    }
  };

  return (
    <div className="flex items-center justify-start md:justify-center min-h-screen bg-gray-50">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl max-h-[100vh] overflow-y-auto">
      <StoreFormHeader />
      <StoreFormFields
        register={register}
        errors={errors}
        availableError={availableError}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  </div>
  );
};

export default CreateStore;
