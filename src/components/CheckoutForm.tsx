"use client";
import { billingDetailsFormFields } from "@/utils/constants";
import CheckoutDetails from "./CheckoutDetails";
import { useForm } from "react-hook-form";
import { CheckoutFormSchema, TCheckoutForm } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createOrder } from "@/app/actions/createOrder";

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCheckoutForm>({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const onSubmit = (data: TCheckoutForm) => {
    createOrder(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-between px-80 mt-20 gap-x-50"
    >
      <section>
        <h1 className="font-bold text-2xl">Billing details</h1>
        <div className="mt-10 space-y-5">
          <div className="flex gap-x-8">
            {billingDetailsFormFields
              .filter(
                (field) =>
                  field.name === "firstName" || field.name === "lastName"
              )
              .map((field) => (
                <div key={field.id} className="flex flex-col gap-y-2">
                  <label htmlFor={field.name} className="font-bold">
                    {field.label}
                  </label>
                  <input
                    {...register(field.name)}
                    type={field.type}
                    className="border border-black/30 rounded-sm py-4 px-3 focus:outline-none focus:border-black"
                  />
                  {errors[field.name]?.message && (
                    <p>{errors[field.name]?.message as string}</p>
                  )}
                </div>
              ))}
          </div>
          <div>
            {billingDetailsFormFields
              .filter(
                (field) =>
                  field.name !== "firstName" && field.name !== "lastName"
              )
              .map((field) => (
                <div key={field.id} className="flex flex-col gap-y-2 mb-5">
                  <label htmlFor={field.name} className="font-bold">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <>
                      <select
                        {...register(field.name)}
                        className="border border-black/30 rounded-sm py-4 px-3 focus:outline-none focus:border-black"
                      >
                        {field.options?.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors[field.name]?.message && (
                        <p>{errors[field.name]?.message as string}</p>
                      )}
                    </>
                  ) : (
                    <>
                      <input
                        {...register(field.name)}
                        type={field.type}
                        className="border border-black/30 rounded-sm py-4 px-3 focus:outline-none focus:border-black"
                      />
                      {errors[field.name]?.message && (
                        <p>{errors[field.name]?.message as string}</p>
                      )}
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
      <CheckoutDetails
        register={register}
        errors={errors}
        setValue={setValue}
      />
    </form>
  );
}

export default CheckoutForm;
