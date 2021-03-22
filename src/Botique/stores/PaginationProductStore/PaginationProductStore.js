import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import ProductModel from '../models/ProductModel'

const PAGINATION_LIMIT = 8

class PaginationProductStore {
   @observable productList
   @observable getProductListAPIStatus
   @observable getProductListAPIError
   productsAPIService
   @observable sizeFilter
   @observable sortBy
   @observable searchText
   presentPage = 1
   offset = 0
   @observable totalProducts = 0

   constructor(productsAPIService) {
      this.productsAPIService = productsAPIService
      this.init()
   }

   init = () => {
      this.productList = new Map()
      this.getProductListAPIStatus = API_INITIAL
      this.getProductListAPIError = null
      this.sizeFilter = []
      this.sortBy = 'ALL'
      this.searchText = ''
   }

   @computed
   get totalPages() {
      const pages = Math.ceil(this.totalProducts / PAGINATION_LIMIT)
      return pages ? pages : 1
   }

   @action
   navigateToNextPage = () => {
      this.presentPage++
      this.offset = this.offset + PAGINATION_LIMIT
      this.getProductList(PAGINATION_LIMIT, this.offset)
   }
   @action
   navigateToPreviousPage = () => {
      this.presentPage--
      this.offset = this.offset - PAGINATION_LIMIT
      this.getProductList(PAGINATION_LIMIT, this.offset)
   }

   @action.bound
   onChangeSortBy(selectedSortBy) {
      this.sortBy = selectedSortBy
   }

   @action.bound
   setProductListResponse(data) {
      this.totalProducts = data.total
      this.productList.clear()

      data.products.forEach(eachProduct => {
         const productModel = new ProductModel(eachProduct)
         this.productList.set(productModel.productId, productModel)
      })
   }
   @action.bound
   setGetProductListAPIError(error) {
      this.getProductListAPIError = error
   }

   @action.bound
   setGetProductListAPIStatus(status) {
      this.getProductListAPIStatus = status
   }

   @action
   getProductList = (limit, offSet) => {
      limit = limit ?? PAGINATION_LIMIT
      offSet = offSet ?? 0

      const productAPIPromise = this.productsAPIService.getProductsAPI(
         limit,
         offSet
      )
      return bindPromiseWithOnSuccess(productAPIPromise)
         .to(this.setGetProductListAPIStatus, this.setProductListResponse)
         .catch(this.setGetProductListAPIError)
   }

   @action.bound
   onSelectSize(selectedSize) {
      if (this.sizeFilter.includes(selectedSize)) {
         this.sizeFilter.splice(this.sizeFilter.indexOf(selectedSize), 1)
      } else this.sizeFilter.push(selectedSize)
   }

   @action.bound
   onChangeSearchText(updatedSearchText) {
      this.searchText = updatedSearchText.trim().toLowerCase()
   }

   filterProductsBySearchText = productsArray => {
      if (this.searchText !== '') {
         productsArray = productsArray.filter(
            product =>
               product.title.toLowerCase().includes(this.searchText) ||
               product.printStyle.toLowerCase().includes(this.searchText)
         )
      }
      return productsArray
   }

   filterProductsBySizes = () => {
      let filteredProducts = []
      if (this.sizeFilter.length)
         this.productList.forEach((eachProduct, key) => {
            if (
               eachProduct.availableSizes.some(size =>
                  this.sizeFilter.includes(size)
               )
            )
               filteredProducts.push(eachProduct)
         })
      else
         this.productList.forEach(product => {
            filteredProducts.push(product)
         })
      return filteredProducts
   }

   @computed
   get sortedAndFilteredProducts() {
      let productsArray = this.filterProductsBySizes()

      if (this.searchText !== '') {
         productsArray = productsArray.filter(
            product =>
               product.title.toLowerCase().includes(this.searchText) ||
               product.printStyle.toLowerCase().includes(this.searchText)
         )
      }
      switch (this.sortBy) {
         case 'ASCENDING':
            productsArray.sort((a, b) => (a.price > b.price ? 1 : -1))
            break
         case 'DESCENDING':
            productsArray.sort((a, b) => (a.price < b.price ? 1 : -1))
            break

         default:
            productsArray.sort()
      }

      return productsArray
   }
   @computed
   get products() {
      console.log(this.sortedAndFilteredProducts)
      return this.sortedAndFilteredProducts
   }

   @computed
   get totalNoOfProductsDisplayed() {
      return this.sortedAndFilteredProducts.length
   }

   clearStore = () => {
      this.init()
   }
}
export { PaginationProductStore }
