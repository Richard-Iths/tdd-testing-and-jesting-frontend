import { render } from "@testing-library/react";
import { mount, ReactWrapper,shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import ProductCardComponent from "../components/cards/product-card.component";
import LandingPage from "./landing.page";
import { IProduct } from "../models/product";
import axios, { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";
import React from "react";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterAll(() => {
  jest.resetAllMocks();
})
describe("landing.page.tsx", () => {
  let fakeData :IProduct[];
  beforeEach(() => {
    fakeData = [
      {
        description: "amazing product",
        img: "sko.gif",
        name: "Trasiga skor",
        price: 150,
        product_id: "1",
        shortDescription: "skor",
      },
    ];
  })
  describe("smoke tests", () => {
    it("should render landing page", () => {
      render(
        <BrowserRouter>
          <LandingPage products={fakeData} />
        </BrowserRouter>
      );
    });
    it("should render product-card component", async () => {
      const  wrapper = shallow(
            <LandingPage products={fakeData}/>
        );
        const product = wrapper.find(ProductCardComponent).first();
        expect(product.exists()).toBe(true);
    });
  });

  describe("black box tests", () => {
    // it("should have called the rest api products endpoint via useEffect hook", async () => {
    //   const response: Partial<AxiosResponse> = {
    //     data: {
    //       data: fakeData,
    //     },
    //   };

    //   await act(async () => {
    //     mockedAxios.get.mockReturnValue(Promise.resolve(response));
    //   });

    //   const effectSpy = jest.spyOn(React, "useEffect");

    //   let wrapper: ReactWrapper;

    //   await act(async () => {
    //     wrapper = mount(
    //       <BrowserRouter>
    //         <LandingPage />
    //       </BrowserRouter>
    //     );
    //     expect(effectSpy).not.toHaveBeenCalled();
    //     expect(mockedAxios.get).not.toHaveBeenCalled();
    //   });

    //   await act(async () => {
    //     wrapper.update();
    //     expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    //     expect(effectSpy).toHaveBeenCalledTimes(1);
    //   });
     
    // })
    // it("should contain rendered product card component, with props from rest api", async () => {
    //   fakeData.push({
    //     description: "amazing product2",
    //     img: "sko2.gif",
    //     name: "Trasiga skor2",
    //     price: 1502,
    //     product_id: "2",
    //     shortDescription: "skor2",
    //   })
    //   const response: Partial<AxiosResponse> = {
    //     data: {
    //       data: fakeData,
    //     },
    //   };

    //   await act(async () => {
    //     mockedAxios.get.mockReturnValue(Promise.resolve(response));
    //   });


    //   let wrapper: ReactWrapper;

    //   await act(async () => {
    //     wrapper = mount(
    //       <BrowserRouter>
    //         <LandingPage />
    //       </BrowserRouter>
    //     );
    //   });

    //   await act(async () => {
    //     wrapper.update();
    //     const products = wrapper.find(ProductCardComponent);
    //     const [firstProduct,secondProduct] = fakeData;
    //     expect(products.length).toBe(2);
    //     expect(products.first().props()).toStrictEqual(firstProduct);
    //     expect(products.at(1).props()).toStrictEqual(secondProduct);
    //   });
    // })
  });

  describe("white box tests", () => {});
});
