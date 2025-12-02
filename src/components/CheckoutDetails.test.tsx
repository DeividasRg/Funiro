import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./CheckoutDetails";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import globalDialogReducer from "@/app/slices/GlobalDialogSlice";
import { paymentMethods } from "@/utils/constants";

function renderWithCart() {
  const store = configureStore({
    reducer: { globalDialog: globalDialogReducer },
    preloadedState: {
      globalDialog: {
        open: false,
        cart: [
          {
            id: "1",
            name: "Sofa",
            price: 20,
            quantity: 4,
            previewImage: "daaosdpas",
            maxCount: 6,
          },
          {
            id: "2",
            name: "Chair",
            price: 38,
            quantity: 1,
            previewImage: "daaosdpas",
            maxCount: 4,
          },
        ],
      },
    },
  });

  return render(
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

describe("CheckoutDetails", () => {
  it("renders cart items with correct name/quantity", () => {
    renderWithCart();
    expect(screen.getByText("Sofa")).toBeInTheDocument();
    expect(screen.getByText("x4")).toBeInTheDocument();
  });

  it("calculates and displayes correct subtotal and total", () => {
    renderWithCart();
    expect(screen.getByText("$80.00")).toBeInTheDocument();
    expect(screen.getByText("$38.00")).toBeInTheDocument();

    //total
    expect(screen.getAllByText("$118").length).toBeGreaterThan(0);
  });

  it("renders all payment methods", () => {
    renderWithCart();

    paymentMethods.forEach((pm) => {
      expect(screen.getByText(pm.label)).toBeInTheDocument();
    });
  });

  it("selecting a payment method shows its additionalText", () => {
    renderWithCart();

    const method = paymentMethods[0];

    const radio = screen.getByLabelText(method.label);
    fireEvent.click(radio);

    expect(screen.getByText(method.additionalText)).toBeInTheDocument();
  });

  it("renders the Place order button", () => {
    renderWithCart();

    expect(
      screen.getByRole("button", { name: /place order/i })
    ).toBeInTheDocument();
  });
});
