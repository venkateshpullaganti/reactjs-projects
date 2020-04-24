import { observable, computed } from "mobx";

class CartStore {
    productStore;
    @observable cartProductList = new Map();
    constructor(props) {
        this.productStore = props.productStore;
        this.cartProductList = props.cartProductList;
    }
    onClickAddToCart = () => {};
    onRemoveCartItem = () => {};
    clearCart = () => {};
    getProductDetailsById = () => {};
    @computed
    totalCartAmount() {}
    @computed
    noOfProductsInCart() {}
}
export default CartStore;
