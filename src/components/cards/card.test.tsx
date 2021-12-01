import React from "react";
import { render } from "@testing-library/react";
import ProductCardComponent from "./product-card.component";
import { shallow } from "enzyme";

describe("card.component.tsx", () => {
  describe("Smoke Test", () => {
    it("should render card.component.tsx", () => {
      render(<ProductCardComponent />);
    });
  });
  describe("Black Box", () => {
    it("should render card.component.tsx", () => {
      render(<ProductCardComponent />);
    });
  });
});
