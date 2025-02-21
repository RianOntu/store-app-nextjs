import StoreNameField from "./StoreNameField";
import SubdomainField from "./SubdomainField";
import LocationField from "./LocationField";
import CategoryField from "./CategoryField";
import CurrencyField from "./CurrencyField";
import EmailField from "./EmailField";

const StoreFormFields = ({
  register,
  errors,
  availableError,
  handleSubmit,
  onSubmit,
}) => (
  <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
    <StoreNameField register={register} errors={errors} />
    <SubdomainField
      register={register}
      errors={errors}
      availableError={availableError}
    />
    <LocationField register={register} errors={errors} />
    <CategoryField register={register} errors={errors} />
    <CurrencyField register={register} errors={errors} />
    <EmailField register={register} errors={errors} />
  </form>
);

export default StoreFormFields;
