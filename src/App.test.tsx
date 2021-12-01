import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./pages/landing.page";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App.tsx", () => {
  describe("Smoke Test", () => {
    it("should render app.tsx", () => {
      render(
        <BrowserRouter>
      <App />
      </BrowserRouter>);
    });
  });
  
});
