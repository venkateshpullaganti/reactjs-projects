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
    totalCartAmount() {
        return 1250;
    }
    @computed
    noOfProductsInCart() {
        return 5;
    }
}
export default CartStore;
