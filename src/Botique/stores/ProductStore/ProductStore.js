import { observable, action, computed } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

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
        this.sortBy = selectedSortBy;
    }
    @action.bound
    onSelectSize(selectedSize) {
        const index = this.sizeFilter.indexOf(selectedSize);
        if (index !== -1) {
            this.sizeFilter.splic(index, 1);
        } else this.sizeFilter.push(selectedSize);
    }
    onChangeSortBy;
    @action.bound
    setProductListResponse(response) {
        this.productList = response;
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
        return bindPromiseWithOnSuccess(productAPIPromise).to(this.se);
    };
    @computed
    get productsFilteredBySizes() {
        return this.productList.filter((eachProduct) => {
            return eachProduct
                .get("availableSizes")
                .some((size) => this.sizeFilter.includes(size));
        });
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
        return this.products;
    }
    @computed
    get totalNoOfProductsDisplayed() {
        return this.products.length;
    }
    clearStore = () => {
        this.init();
    };
    init = () => {
        this.productList = new Map();
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = "SELECT";
    };
}
export { ProductStore };
