import { render, } from "@testing-library/react";
import { shallow, render as enzymeRender, mount, ReactWrapper } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import ProductCardComponent from "../components/cards/product-card.component";
import LandingPage from "./landing.page";
import { IProduct } from "../models/product";
import axios, { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";
import React from 'react';

// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("landing.page.tsx", () => {
  describe("smoke tests", () => {
    it("should render landing page", () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      );
    });
    it("should render product-card component", async () => {
      const fakeData: IProduct[] = [
        {
          description: "amazing product",
          img: "sko.gif",
          name: "Trasiga skor",
          price: 150,
          product_id: "1",
          shortDescription: "skor",
        },
      ];
      const response: Partial<AxiosResponse> = {
        data: {
          data: fakeData,
        },
      };

      await act(async () => {
      axios.get = jest.fn().mockReturnValue(response);
      })

      const effectSpy = jest.spyOn(React,"useEffect");

  
      let wrapper : ReactWrapper;
      await act(async () => {
         wrapper = mount(
          <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      );
        expect(effectSpy).not.toHaveBeenCalled();
        expect(axios.get).not.toHaveBeenCalled();
      })
      
      
      await act(async () => {   
        wrapper.update();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(effectSpy).toHaveBeenCalledTimes(1);
        const product = wrapper.find(
          ProductCardComponent
        ).first();
        expect(product.exists()).toBe(true);
        expect(product.props()).toStrictEqual(fakeData[0]);
      });
    });
  });

  describe("black box tests", () => {});

  describe("white box tests", () => {});
});
