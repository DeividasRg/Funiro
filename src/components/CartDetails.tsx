"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  selectGlobalDialogState,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/app/slices/GlobalDialogSlice";

function CartDetails() {
  const dispatch = useDispatch();
  const { cart } = useSelector(selectGlobalDialogState);
  const total = Number(
    cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
  );
  const VAT = Number((total - total / 1.21).toFixed(2));
  const totalWithoutVAT = Number((total - VAT).toFixed(2));

  return cart.length === 0 ? (
    <section className="text-center mt-10">
      <h1 className="font-bold text-2xl">Cart is empty</h1>
    </section>
  ) : (
    <section className="flex mt-15 mx-20 gap-x-10">
      <div className="w-[75%]">
        <div className="flex items-center justify-around -px-20 bg-main font-bold text-base py-3">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-8 text-base"
            >
              <div className="flex items-center justify-between gap-x-5">
                <div className="relative w-30 h-30">
                  <Image
                    src={item.previewImage}
                    fill
                    className="object-cover rounded-lg shadow"
                    alt="Cart item"
                  />
                </div>
                <p>{item.name}</p>
              </div>
              <p className="-translate-x-16">${item.price}</p>
              <div className="relative inline-flex items-center group -translate-x-8">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className=" absolute left-0 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 text-zinc-500 hover:text-zinc-900"
                >
                  −
                </button>

                <p className="px-3 py-1">{item.quantity}</p>

                <button
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        id: item.id,
                        maxCount: item.maxCount,
                      })
                    )
                  }
                  className="absolute right-0 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 text-zinc-500 hover:text-zinc-900"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-x-25">
                <p>${item.quantity * item.price}</p>
                <button onClick={() => dispatch(removeItem(item.id))}>
                  <CiTrash
                    size={20}
                    className="text-orange-600 hover:text-orange-700 hover:cursor-pointer transition"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 h-[350px] bg-main flex items-center flex-col">
        <h1 className="mt-5 text-2xl font-bold">Cart Totals</h1>
        <div className="mt-20 text-xl w-full space-y-2">
          <div className="flex justify-between px-15">
            <p className="font-bold">Subtotal</p>
            <p>${totalWithoutVAT}</p>
          </div>
          <div className="flex justify-between px-15">
            <p className="font-bold">VAT</p>
            <p className="text-zinc-900/50">${VAT}</p>
          </div>
          <div className="flex justify-between px-15">
            <p className="font-bold">Total</p>
            <p className="text-secondary-main">${total}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetails;
