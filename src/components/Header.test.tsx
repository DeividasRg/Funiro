import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./Header";
import { Provider } from "react-redux";
import { store } from "@/app/store";

jest.mock("./Logo", () => ({
  __esModule: true,
  default: function MockLogo() {
    return <div data-testid="logo" />;
  },
}));

jest.mock("./Navigation", () => ({
  __esModule: true,
  default: function MockNavigation() {
    return <div data-testid="navigation" />;
  },
}));

jest.mock("./QuickIcons", () => ({
  __esModule: true,
  default: function MockQuickIcons() {
    return <div data-testid="quick-icons" />;
  },
}));

describe("Footer", () => {
  it("renders the components", () => {
    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("quick-icons")).toBeInTheDocument();
  });
});
