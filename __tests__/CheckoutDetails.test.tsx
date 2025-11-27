jest.mock("@supabase/supabase-js");

import { render, screen } from "@testing-library/react";
import CheckoutDetails from "@/components/CheckoutDetails";
import { store } from "@/app/store";
import { Provider } from "react-redux";

it("Should have First Name", () => {
  render(
    <Provider store={store}>
      <CheckoutDetails />
    </Provider>
  );

  const myElement = screen.getByText("Subtotal");

  expect(myElement).toBeInTheDocument();
});
