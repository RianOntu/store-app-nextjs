"use client";
import StoreNameField from "./StoreNameField";
import SubdomainField from "./SubdomainField";
import LocationField from "./LocationField";
import CategoryField from "./CategoryField";
import CurrencyField from "./CurrencyField";
import EmailField from "./EmailField";
import SubmitButton from "./SubmitButtonComponent";

const StoreFormFields = ({
  register,
  errors,
  availableError,
  availableSuccess,
  handleSubmit,
  onSubmit,
  isLoading,
  isValid,
}) => (
  <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
    <StoreNameField register={register} errors={errors} />
    <SubdomainField
      register={register}
      errors={errors}
      availableError={availableError}
      availableSuccess={availableSuccess}
    />
    <LocationField register={register} errors={errors} />
    <CategoryField register={register} errors={errors} />
    <CurrencyField register={register} errors={errors} />
    <EmailField register={register} errors={errors} />
    <SubmitButton
      isLoading={isLoading}
      isValid={isValid}
      availableError={availableError}
    />
  </form>
);

export default StoreFormFields;
