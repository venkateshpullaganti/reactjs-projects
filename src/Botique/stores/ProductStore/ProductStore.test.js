import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
} from "@ib/api-constants";

import ProductService from "../../services/ProductService";
import getProductsResponse from "../../../fixtures/getProductsResponse.json";
import productsTestFixtures from "../../../fixtures/productsTestFixtures.json";

import { ProductStore } from ".";

describe("ProductStore tests", () => {
   let productService;
   let productStore;

   beforeEach(() => {
      productService = new ProductService();
      productStore = new ProductStore(productService);
   });

   afterEach(() => {
      jest.resetAllMocks();
   });

   it("Should test initializing product store", () => {
      expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
      expect(productStore.getProductListAPIError).toBe(null);
   });
   it("should test ProductListAPI fetching state", () => {
      let mockLoadingPromise = new Promise((resolve, reject) => {});

      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockLoadingPromise);
      productService.getProductsAPI = mockProductsAPI;

      productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
   });
   it("should test ProductListAPI success state", async () => {
      let mockSuccessPromise = Promise.resolve(getProductsResponse);
      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockSuccessPromise);

      productService.getProductsAPI = mockProductsAPI;

      await productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
   });

   it("should test ProductListAPI failure state", async () => {
      let mockFailurePromise = Promise.reject();
      // new Promise((resolve, reject) => reject());

      // jest.spyOn(
      //     productService.getProductsAPI(),
      //     "product api"
      // ).mockImplementation(() => Promise.reject());

      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockFailurePromise);
      productService.getProductsAPI = mockProductsAPI;

      await productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
   });

   it("should test the sorting of the products", async () => {
      let testOrder = "ASCENDING";
      let mockSuccessPromise = Promise.resolve(getProductsResponse);
      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductsAPI = mockProductsAPI;

      await productStore.getProductList();

      productStore.onChangeSortBy(testOrder);

      let products = productStore.products;

      products.forEach((product, index) => {
         if (index < products.length - 1)
            expect(products[index + 1].price).toBeGreaterThanOrEqual(
               product.price
            );
      });
   });

   it("should test the products by selected size", async () => {
      let testSize = "XL";

      let mockSuccessPromise = Promise.resolve(getProductsResponse);
      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductList = mockProductsAPI;

      await productStore.getProductList();

      productStore.onSelectSize(testSize);

      productStore.products.forEach((product) => {
         expect(product.availableSizes).toContain(testSize);
      });
   });

   it("should test the products by search text", async () => {
      let sampleText = "Cat";

      let mockSuccessPromise = Promise.resolve(getProductsResponse);
      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductList = mockProductsAPI;

      await productStore.getProductList();

      productStore.onChangeSearchText(sampleText);

      productStore.products.forEach((product) => {
         expect(product.title).toContain(sampleText);
      });
      expect(productStore.totalNoOfProductsDisplayed).toBe(
         productStore.products.length
      );
   });

   it("should test the products by search text, selected sizes and selected sort", async () => {
      let testOrder = "DECENDING";
      let sampleSearchText = "Cat";

      let mockSuccessPromise = Promise.resolve(getProductsResponse);
      let mockProductsAPI = jest.fn();
      mockProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductsAPI = mockProductsAPI;

      await productStore.getProductList();

      productStore.onChangeSearchText(sampleSearchText);
      productStore.onSelectSize("XL");
      productStore.onSelectSize("S");
      productStore.onChangeSortBy(testOrder);

      const products = productStore.products;

      expect(products.length).toBe(2);

      productStore.products.forEach((product) => {
         expect(product.title).toContain(sampleSearchText);
      });

      productStore.products.forEach((product) => {
         expect(product.availableSizes).toContain("S" || "XL");
         // expect(product.availableSizes).toEqual(
         //     expect.arrayContaining(["S", "XL"])
         // );
      });
   });
});
