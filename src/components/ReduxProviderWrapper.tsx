"use client";
import { hydrateCart } from "@/app/slices/GlobalDialogSlice";
import { store } from "@/app/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";

function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateCart());
  }, [dispatch]);
  return null;
}

function ReduxProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CartHydrator />
      {children}
    </Provider>
  );
}

export default ReduxProviderWrapper;
