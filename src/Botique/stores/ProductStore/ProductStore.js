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
    @action.bound
    onChangeSortBy(selectedSortBy) {
        this.sortBy = selectedSortBy;
    }
    @action.bound
    onSelectSize(selectedSize) {
        const index = this.sizeFilter.indexOf(selectedSize);
        if (index !== -1) {
            this.sizeFilter.splice(index, 1);
        } else this.sizeFilter.push(selectedSize);
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
    // @computed
    // get productsBySize() {
    //     let productsBySize = [];

    //     if (this.sizeFilter.length)
    //         this.productList.forEach((eachProduct, key) => {
    //             if (
    //                 eachProduct.availableSizes.some((size) =>
    //                     this.sizeFilter.includes(size)
    //                 )
    //             )
    //                 productsBySize.push(eachProduct);
    //         });
    //     else
    //         this.productList.forEach((product) => {
    //             productsBySize.push(product);
    //         });
    //     return productsBySize;
    // }
    @action.bound
    onChangeSearchText(updatedSearchText) {
        this.searchText = updatedSearchText.toLowerCase();
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

    @computed
    get sortedAndFilteredProducts() {
        let productsArray = [];

        if (this.sizeFilter.length)
            this.productList.forEach((eachProduct, key) => {
                if (
                    eachProduct.availableSizes.some((size) =>
                        this.sizeFilter.includes(size)
                    )
                )
                    productsArray.push(eachProduct);
            });
        else
            this.productList.forEach((product) => {
                productsArray.push(product);
            });

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

        if (this.searchText !== "") {
            productsArray = productsArray.filter(
                (product) =>
                    product.title.toLowerCase().includes(this.searchText) ||
                    product.printStyle.toLowerCase().includes(this.searchText)
            );
        }

        this.displayedProductsCount = productsArray.length;
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
    init = () => {
        this.productList = new Map();
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = "ALL";
        this.searchText = "";
    };
}
export { ProductStore };
