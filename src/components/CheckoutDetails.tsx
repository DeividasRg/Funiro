"use client";
import { selectGlobalDialogState } from "@/app/slices/GlobalDialogSlice";
import { useSelector } from "react-redux";

function CheckoutDetails() {
  const { cart } = useSelector(selectGlobalDialogState);
  const total = Number(
    cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
  );

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
          <h1 className="font-bold text-2xl">Product</h1>
          {cart.map((item) => (
            <p key={item.id}>${(item.price * item.quantity).toFixed(2)}</p>
          ))}
          <p>${total}</p>
          <p className="font-bold text-secondary-main tracking-wider">
            ${total}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CheckoutDetails;
