import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./CheckoutDetails";
import { store } from "@/app/store";
import { Provider } from "react-redux";

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );
  });
});
