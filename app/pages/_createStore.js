"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import StoreFormHeader from "../components/StoreFormHeader";
import StoreFormFields from "../components/StoreFormFields";


const CreateStore = () => {
  const [availableError, setAvailableError] = useState("");
  const [availableSuccess,setAvailableSuccess]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
    reset,
    watch,
   
  } = useForm({
    mode: "onChange",
  });

  // Watch the 'subdomain' field
  const subdomain = watch("subdomain");
  useEffect(() => {
    // Only check domain availability when the subdomain value is not empty
    const checkDomainAvailability = async () => {
      if (subdomain) {
        try {
          setAvailableError(""); // Reset error message before checking
          const checkResponse = await fetch(
            `https://interview-task-green.vercel.app/task/domains/check/${subdomain}.expressitbd.com`
          );
          const checkResult = await checkResponse.json();
  
          // If the domain is taken, set the error message
          if (checkResult.data.taken) {
            setAvailableError("Not available domain! Re-enter");
            setAvailableSuccess(""); // Clear success message
          } else {
            setAvailableError(""); // Clear error if domain is available
            setAvailableSuccess("✔ Domain available");
          }
        } catch (error) {
          console.error("Error checking domain availability:", error);
        }
      } else {
        // Clear both success and error messages when the subdomain is empty
        setAvailableError("");
        setAvailableSuccess("");
      }
    };
  
    // Run domain check when subdomain changes
    checkDomainAvailability();
  }, [subdomain]); // Dependency array to trigger effect only when subdomain changes
   // Dependency array to trigger effect only when subdomain changes

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      reset({}, { keepValues: true });
      setAvailableError("");
      setAvailableSuccess("")

      const { storeName, subdomain, location, category, currency, email } = data;

      if (availableError) {
        // Don't proceed if domain is not available
        setIsLoading(false);
        return;
      }

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
      setAvailableSuccess("")
      router.push("/shop");
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
          availableSuccess={availableSuccess}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isLoading={isLoading}
          isValid={isValid}
        />
      </div>
    </div>
  );
};

export default CreateStore;
