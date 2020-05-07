import { observable, action, computed } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

import ProductModel from "../models/ProductModel";

class ProductStore {
   @observable productList;
   @observable getProductListAPIStatus;
   @observable getProductListAPIError;
   productsAPIService;
   @observable sizeFilter;
   @observable sortBy;
   @observable searchText;

   constructor(productsAPIService) {
      this.productsAPIService = productsAPIService;
      this.init();
   }

   init = () => {
      this.productList = new Map();
      this.getProductListAPIStatus = API_INITIAL;
      this.getProductListAPIError = null;
      this.sizeFilter = [];
      this.sortBy = "ALL";
      this.searchText = "";
   };

   @action.bound
   onChangeSortBy(selectedSortBy) {
      this.sortBy = selectedSortBy;
   }

   @action.bound
   setProductListResponse(data) {
      data.forEach((eachProduct) => {
         const productModel = new ProductModel(eachProduct);
         this.productList.set(productModel.productId, productModel);
      });
   }
   @action.bound
   setGetProductListAPIError(error) {
      this.getProductListAPIError = error;
   }

   @action.bound
   setGetProductListAPIStatus(status) {
      this.getProductListAPIStatus = status;
   }

   getProductList = () => {
      const productAPIPromise = this.productsAPIService.getProductsAPI();
      return bindPromiseWithOnSuccess(productAPIPromise)
         .to(this.setGetProductListAPIStatus, this.setProductListResponse)
         .catch(this.setGetProductListAPIError);
   };

   @action.bound
   onSelectSize(selectedSize) {
      if (this.sizeFilter.includes(selectedSize)) {
         this.sizeFilter.splice(this.sizeFilter.indexOf(selectedSize), 1);
      } else this.sizeFilter.push(selectedSize);
   }

   @action.bound
   onChangeSearchText(updatedSearchText) {
      this.searchText = updatedSearchText.trim().toLowerCase();
   }

   filterProductsBySearchText = (productsArray) => {
      if (this.searchText !== "") {
         productsArray = productsArray.filter(
            (product) =>
               product.title.toLowerCase().includes(this.searchText) ||
               product.printStyle.toLowerCase().includes(this.searchText)
         );
      }
      return productsArray;
   };

   filterProductsBySizes = () => {
      let filteredProducts = [];
      if (this.sizeFilter.length)
         this.productList.forEach((eachProduct, key) => {
            if (
               eachProduct.availableSizes.some((size) =>
                  this.sizeFilter.includes(size)
               )
            )
               filteredProducts.push(eachProduct);
         });
      else
         this.productList.forEach((product) => {
            filteredProducts.push(product);
         });
      return filteredProducts;
   };

   @computed
   get sortedAndFilteredProducts() {
      let productsArray = this.filterProductsBySizes();

      if (this.searchText !== "") {
         productsArray = productsArray.filter(
            (product) =>
               product.title.toLowerCase().includes(this.searchText) ||
               product.printStyle.toLowerCase().includes(this.searchText)
         );
      }
      switch (this.sortBy) {
         case "ASCENDING":
            productsArray.sort((a, b) => (a.price > b.price ? 1 : -1));
            break;
         case "DESCENDING":
            productsArray.sort((a, b) => (a.price < b.price ? 1 : -1));
            break;

         default:
            productsArray.sort();
      }

      return productsArray;
   }
   @computed
   get products() {
      return this.sortedAndFilteredProducts;
   }

   @computed
   get totalNoOfProductsDisplayed() {
      return this.sortedAndFilteredProducts.length;
   }
   clearStore = () => {
      this.init();
   };
}
export { ProductStore };
