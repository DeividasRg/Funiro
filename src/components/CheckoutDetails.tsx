"use client";
import { selectGlobalDialogState } from "@/app/slices/GlobalDialogSlice";
import { paymentMethods } from "@/utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import BtnComp from "./BtnComp";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { TCheckoutForm } from "@/utils/schema";

type CheckoutDetailsProps = {
  register: UseFormRegister<TCheckoutForm>;
  errors: FieldErrors<TCheckoutForm>;
  setValue: UseFormSetValue<TCheckoutForm>;
};

function CheckoutDetails({ register, errors, setValue }: CheckoutDetailsProps) {
  const { cart } = useSelector(selectGlobalDialogState);
  const total = Number(
    cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
  );
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] =
    useState<number>();

  return (
    <section className="w-full">
      <div className="flex justify-between border-b border-black/20 pb-8">
        <div className="space-y-8">
          <h1 className="font-bold text-2xl">Product</h1>
          {cart.map((item) => (
            <p key={item.id}>
              <span className="text-black/50">{item.name}</span> x
              {item.quantity}
            </p>
          ))}
          <p className="font-bold">Subtotal</p>
          <p className="font-bold">Total</p>
        </div>
        <div className="space-y-8">
          <h1 className="font-bold text-2xl">Subtotal</h1>
          {cart.map((item) => (
            <p key={item.id}>${(item.price * item.quantity).toFixed(2)}</p>
          ))}
          <p>${total}</p>
          <p className="font-bold text-secondary-main tracking-wider">
            ${total}
          </p>
        </div>
      </div>
      <ul className="flex flex-col gap-y-3 mt-5">
        {paymentMethods.map((method) => (
          <li key={method.id} className="space-y-2">
            <label className="flex gap-x-4">
              <input
                type="radio"
                {...register("paymentMethod", {
                  required: "Payment Method is required",
                })}
                value={method.value}
                className="peer hidden"
                checked={selectedPaymentMethodId === method.id}
                onChange={() => {
                  setValue("paymentMethod", method.value);
                  setSelectedPaymentMethodId(method.id);
                }}
              />

              <div className="w-4 h-4 rounded-full border border-gray-500 peer-check:border-black peer-checked:bg-black transition" />
              <span className="text-black/50 peer-checked:text-black transition">
                {method.label}
              </span>
            </label>
            {selectedPaymentMethodId === method.id ? (
              <p className="text-sm text-black/50">{method.additionalText}</p>
            ) : (
              ""
            )}
          </li>
        ))}
        {errors.paymentMethod && (
          <p>{errors.paymentMethod.message as string}</p>
        )}
        <p className="mt-2">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-bold">privacy policy.</span>
        </p>
      </ul>
      <div className="text-center w-full mt-8">
        <BtnComp
          type="addition"
          additionalStyles="border-black rounded-lg border-1 text-black py-4"
          submit={true}
        >
          Place order
        </BtnComp>
      </div>
    </section>
  );
}

export default CheckoutDetails;
