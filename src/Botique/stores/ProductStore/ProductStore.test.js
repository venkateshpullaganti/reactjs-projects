import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
} from "@ib/api-constants";

import ProductService from "../../services/ProductService";
import getProductsResponse from "../../../fixtures/getProductsResponse.json";

import { ProductStore } from ".";

describe("ProductStore tests", () => {
    let productService;
    let productStore;

    beforeEach(() => {
        productService = new ProductService();
        productStore = new ProductStore(productService);
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
        // expect(productStore.setProductListResponse).toBeCalled();
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
});
