"use client";

import {
  CartItem,
  hideDialog,
  removeItem,
  selectGlobalDialogState,
} from "@/app/slices/GlobalDialogSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

function GlobalDialog() {
  const dispatch = useDispatch();
  const { open, cart } = useSelector(selectGlobalDialogState);

  return (
    <Dialog open={open} onOpenChange={() => dispatch(hideDialog())}>
      <AnimatePresence>
        <DialogContent className="max-w-lg p-0 bg-white">
          <motion.div
            initial={{ opacity: 0, x: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 0, y: -50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="rounded-lg border shadow-lg p-6"
          >
            <DialogHeader>
              <DialogTitle className="pb-4 border-b border-zinc-900/20">
                Shopping Cart
              </DialogTitle>
            </DialogHeader>
            {cart.length === 0 ? (
              <p className="mt-4">Your cart is empty</p>
            ) : (
              <div className="mt-5">
                <div className="h-[400px] overflow-y-auto">
                  {cart.map((item: CartItem) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-3 px-5"
                    >
                      <div className="flex items-center gap-x-7">
                        <div className="relative w-30 h-30">
                          <Image
                            className="object-cover rounded-lg shadow"
                            src={item.previewImage}
                            alt="Product Image"
                            fill
                          />
                        </div>
                        <div className="space-y-5">
                          <p className="font-bold text-base">{item.name}</p>
                          <p>
                            <span className="text-xl">{item.quantity}</span>{" "}
                            <span className="mx-3">X</span>
                            <span className="text-base text-secondary-main font-bold">
                              ${item.price}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="bg-zinc-400 px-2.5 py-1 rounded-full text-white hover:cursor-pointer hover:bg-zinc-500 transition active:bg-zinc-600"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-x-20 mt-20 mb-6 items-center">
                  <p className="text-xl">Subtotal</p>
                  <p className="text-xl text-secondary-main font-bold">$500</p>
                </div>
                <div className="flex items-center gap-x-2 justify-around pt-5 border-t">
                  <button className="font-bold border border-black  px-10 py-4 rounded-4xl hover:bg-secondary-main hover:cursor-pointer hover:text-white transition">
                    Cart
                  </button>
                  <button className="font-bold border border-black  px-10 py-4 rounded-4xl hover:bg-secondary-main hover:cursor-pointer hover:text-white transition">
                    Checkout
                  </button>
                  <button className="font-bold border border-black  px-10 py-4 rounded-4xl hover:bg-secondary-main hover:cursor-pointer hover:text-white transition">
                    Comparison
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </DialogContent>
      </AnimatePresence>
    </Dialog>
  );
}

export default GlobalDialog;
