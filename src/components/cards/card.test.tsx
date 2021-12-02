import { render } from "@testing-library/react";
import ProductCardComponent from "./product-card.component";
import { shallow, render as enzymeRender, mount } from "enzyme";
import { IProduct } from "../../models/product";
import { BrowserRouter } from "react-router-dom";

describe("card.component.tsx", () => {
  const props: Partial<IProduct> = {
    name: "Spongebob",
    img: "facebook/1",
    price: 200,
    product_id: "sdadoii",
  };
  describe("Smoke Test", () => {
    it("should render card.component.tsx", () => {
      render(
        <BrowserRouter>
          <ProductCardComponent />
        </BrowserRouter>
      );
    });
  });
  describe("Black Box Tests", () => {
    it("Should have a header section", () => {
      const wrapper = shallow(<ProductCardComponent />);
      const header = wrapper.find('[data-test="header-section"]');
      expect(header.exists()).toBe(true);
    });
    it("Should have a content section", () => {
      const wrapper = shallow(<ProductCardComponent />);
      const content = wrapper.find('[data-test="content-section"]');
      expect(content.exists()).toBe(true);
    });
    it("Should have a footer section", () => {
      const wrapper = shallow(<ProductCardComponent />);
      const footer = wrapper.find('[data-test="footer-section"]');
      expect(footer.exists()).toBe(true);
    });
  });

  describe("White Box Tests", () => {
    it("Should have a link to a single product", () => {
      const wrapper = shallow(<ProductCardComponent />);
      const link = wrapper.find('[data-test="product-link"]');
      expect(link.exists()).toBe(true);
    });
    it("Should have props", () => {
      const wrapper = mount(
        <BrowserRouter>
          <ProductCardComponent name="spongebob" />
        </BrowserRouter>
      );
      const product = wrapper.find(ProductCardComponent);
      expect(product.props().name).toEqual("spongebob");
    });
  });
});
