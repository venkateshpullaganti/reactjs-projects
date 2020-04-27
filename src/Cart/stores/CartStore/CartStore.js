import { observable, computed, action } from "mobx";

import CartItem from "../models/CartItem";

class CartStore {
    productStore;
    @observable cartProductList;

    constructor(productStore) {
        this.productStore = productStore;
        this.init();
    }
    init = () => {
        this.cartProductList = new Map();
    };
    @action.bound
    onClickAddToCart = (productId) => {
        //check the item in cart

        if (!this.cartProductList.has(productId)) {
            const cartObj = {
                cartItemId: productId,
                productId,
                quantity: 1,
            };
            const cartItem = new CartItem(cartObj);
            this.cartProductList.set(cartItem.cartItemId, cartItem);
        } else {
            this.cartProductList.get(productId).incrementQuantity();
        }
    };
    @action.bound
    onRemoveCartItem(cartItemId) {
        this.cartProductList.delete(cartItemId);
    }
    getProductDetailsById = (productId) => {
        const { productList } = this.productStore;

        return productList.get(productId);
    };
    @computed
    get totalCartAmount() {
        let totalAmount = 0;
        this.cartProductList.forEach((cartItem, key) => {
            totalAmount += this.getProductDetailsById(cartItem.productId).price;
        });
        return totalAmount.toFixed(2);
    }
    @computed
    get noOfProductsInCart() {
        let productsCount = 0;
        this.cartProductList.forEach(
            (cartItem, key, map) => (productsCount += cartItem.quantity)
        );
        return productsCount;
    }
    @computed
    get cartProductsData() {
        let products = [];
        this.cartProductList.forEach((product, key) =>
            products.push(this.getProductDetailsById(product.productId))
        );
        return products;
    }
    clearCart = () => {
        this.init();
    };
}
export default CartStore;
