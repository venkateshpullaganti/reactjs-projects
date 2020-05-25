import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import PaginationProductService from '../../services/PaginationProductService'
import getProductsResponse from '../../../fixtures/getProductsResponse.json'
import productsTestFixtures from '../../../fixtures/productsTestFixtures.json'

import { PaginationProductStore } from '.'

describe('PaginationProductStore tests', () => {
   let productService
   let paginationProductStore

   beforeEach(() => {
      productService = new PaginationProductService()
      paginationProductStore = new PaginationProductStore(productService)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('Should test initializing product store', () => {
      expect(paginationProductStore.getProductListAPIStatus).toBe(API_INITIAL)
      expect(paginationProductStore.getProductListAPIError).toBe(null)
   })
   it('should test ProductListAPI fetching state', () => {
      let mockLoadingPromise = new Promise((resolve, reject) => {})

      let mockProductsAPI = jest.fn()
      mockProductsAPI.mockReturnValue(mockLoadingPromise)
      productService.getProductsAPI = mockProductsAPI

      paginationProductStore.getProductList()
      expect(paginationProductStore.getProductListAPIStatus).toBe(API_FETCHING)
   })
   it('should test ProductListAPI success state', async () => {
      let mockSuccessPromise = Promise.resolve(getProductsResponse)
      let mockProductsAPI = jest.fn()
      mockProductsAPI.mockReturnValue(mockSuccessPromise)

      productService.getProductsAPI = mockProductsAPI

      await paginationProductStore.getProductList()
      expect(paginationProductStore.getProductListAPIStatus).toBe(API_SUCCESS)
   })

   it('should test ProductListAPI failure state', async () => {
      let mockFailurePromise = Promise.reject()
      // new Promise((resolve, reject) => reject());

      // jest.spyOn(
      //     productService.getProductsAPI(),
      //     "product api"
      // ).mockImplementation(() => Promise.reject());

      let mockProductsAPI = jest.fn()
      mockProductsAPI.mockReturnValue(mockFailurePromise)
      productService.getProductsAPI = mockProductsAPI

      await paginationProductStore.getProductList()
      expect(paginationProductStore.getProductListAPIStatus).toBe(API_FAILED)
   })

   it('should test the sorting of the products', async () => {
      let testOrder = 'ASCENDING'
      let mockSuccessPromise = Promise.resolve(getProductsResponse)
      let mockProductsAPI = jest.fn()
      mockProductsAPI.mockReturnValue(mockSuccessPromise)
      productService.getProductsAPI = mockProductsAPI

      await paginationProductStore.getProductList()

      paginationProductStore.onChangeSortBy(testOrder)

      let products = paginationProductStore.products

      products.forEach((product, index) => {
         if (index < products.length - 1)
            expect(products[index + 1].price).toBeGreaterThanOrEqual(
               product.price
            )
      })
   })

   it('should test the products by selected size', async () => {
      let testSize = 'XL'

      let mockSuccessPromise = Promise.resolve(getProductsResponse)
      let mockProductsAPI = jest.fn()
      mockProductsAPI.mockReturnValue(mockSuccessPromise)
      productService.getProductList = mockProductsAPI

      await paginationProductStore.getProductList()

      paginationProductStore.onSelectSize(testSize)

      paginationProductStore.products.forEach(product => {
         expect(product.availableSizes).toContain(testSize)
      })
   })

   it('should test the products by search text', async () => {
      let sampleText = 'Cat'

      let mockSuccessPromise = Promise.resolve(getProductsResponse)
      let mockProductsAPI = jest.fn()
      mockProductsAPI.mockReturnValue(mockSuccessPromise)
      productService.getProductList = mockProductsAPI

      await paginationProductStore.getProductList()

      paginationProductStore.onChangeSearchText(sampleText)

      paginationProductStore.products.forEach(product => {
         expect(product.title).toContain(sampleText)
      })
      expect(paginationProductStore.totalNoOfProductsDisplayed).toBe(
         paginationProductStore.products.length
      )
   })

   it('should test the products by search text, selected sizes and selected sort', () => {
      let testOrder = 'DESCENDING'
      let sampleSearchText = 'shirt'

      paginationProductStore.setProductListResponse(getProductsResponse)

      paginationProductStore.onChangeSearchText(sampleSearchText)
      paginationProductStore.onSelectSize('S')
      paginationProductStore.onSelectSize('XXL')
      paginationProductStore.onChangeSortBy(testOrder)

      const products = paginationProductStore.products

      expect(products.length).toBe(productsTestFixtures.length)

      expect(paginationProductStore.products[5].title).toEqual(
         productsTestFixtures[5].title
      )
      expect(paginationProductStore.products[0].title).toEqual(
         productsTestFixtures[0].title
      )
      expect(paginationProductStore.products[1].price).toEqual(
         productsTestFixtures[1].price
      )
      expect(paginationProductStore.products[4].printStyle).toEqual(
         productsTestFixtures[4].printStyle
      )
      expect(paginationProductStore.products[2].availableSizes).toEqual(
         productsTestFixtures[2].availableSizes
      )

      // paginationProductStore.products.forEach((product) => {
      //    expect(product.title).toContain(sampleSearchText);
      // });

      // paginationProductStore.products.forEach((product) => {
      //    expect(product.availableSizes).toContain("S" || "XXL");
      //    // expect(product.availableSizes).toEqual(
      //    //     expect.arrayContaining(["S", "XL"])
      //    // );
      // });
   })
})
