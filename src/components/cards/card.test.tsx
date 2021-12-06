import { render } from "@testing-library/react";
import ProductCardComponent,{Props} from "./product-card.component";
import { shallow, render as enzymeRender, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

describe("card.component.tsx", () => {
  const props: Props = {
    name: "Spongebob",
    img: "facebook/1",
    price: 200,
    product_id: "sdadoii",
    shortDescription:"a short description",
  };
  describe("Smoke Test", () => {
    it("should render card.component.tsx", () => {
      render(
        <BrowserRouter>
          <ProductCardComponent {...props}/>
        </BrowserRouter>
      );
    });
  });
  describe("Black Box Tests", () => {
    it("Should have a header element", () => {
      const wrapper = shallow(<ProductCardComponent {...props}/>);
      const header = wrapper.find('[data-test="header-section"]');
      expect(header.exists()).toBe(true);
    });
    it("Should have a content element", () => {
      const wrapper = shallow(<ProductCardComponent {...props} />);
      const content = wrapper.find('[data-test="content-section"]');
      expect(content.exists()).toBe(true);
    });
    it("Should have a footer element", () => {
      const wrapper = shallow(<ProductCardComponent {...props}/>);
      const footer = wrapper.find('[data-test="footer-section"]');
      expect(footer.exists()).toBe(true);
    });
  });

  describe("White Box Tests", () => {
    it("Should have a link to a single product", () => {
      const wrapper = shallow(<ProductCardComponent  {...props}/>);
      const link = wrapper.find('[data-test="product-link"]');
      expect(link.exists()).toBe(true);
    });
    it("Should have props", () => {
      const wrapper = mount(
        <BrowserRouter>
          <ProductCardComponent {...props} name="spongebob" />
        </BrowserRouter>
      );
      const product = wrapper.find(ProductCardComponent);
      expect(product.props().name).toEqual("spongebob");
    });
  });
});
