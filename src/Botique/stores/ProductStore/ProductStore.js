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
    price = "price";
    constructor(productsAPIService) {
        this.productsAPIService = productsAPIService;
        this.init();
    }
    @action.bound
    onChangeSortBy(selectedSortBy) {
        console.log(selectedSortBy);
        this.sortBy = selectedSortBy;
    }
    @action.bound
    onSelectSize(selectedSize) {
        const index = this.sizeFilter.indexOf(selectedSize);
        if (index !== -1) {
            this.sizeFilter.splice(index, 1);
        } else this.sizeFilter.push(selectedSize);
        console.log(this.sizeFilter);
    }

    @action.bound
    setProductListResponse(data) {
        data.forEach((eachProduct) => {
            const productModel = new ProductModel(eachProduct);
            this.productList.push(productModel);
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
    @computed
    get productsFilteredBySizes() {
        // return this.productList.filter((eachProduct) => {
        //     return eachProduct
        //         .get("availableSizes")
        //         .some((size) => this.sizeFilter.includes(size));
        // });
        return this.productList;
    }
    sortedProducts = (products) => {
        // if (this.sortBy === "Asecding") {
        //     for (let i = 0; i < products.length; i++) {
        //         for (let j = 0; j < products.length; j++) {
        //             if (products[i] < products[j]) {
        //                 //swap
        //             }
        //         }
        //     }
        // }
        return products;
    };
    @computed
    get products() {
        const productsBySize = this.productsFilteredBySizes;
        return this.sortedProducts(productsBySize);
        //have to sort the products
        // return this.productList;
    }
    @computed
    get sortedAndFilteredProducts() {
        return this.productList;
    }
    @computed
    get totalNoOfProductsDisplayed() {
        return this.products.length;
    }
    clearStore = () => {
        this.init();
    };
    init = () => {
        this.productList = [];
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = "SELECT";
    };
}
export { ProductStore };
