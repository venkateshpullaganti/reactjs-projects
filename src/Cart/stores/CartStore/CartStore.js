import { observable, computed } from "mobx";

class CartStore {
    productStore;
    @observable cartProductList;

    constructor(props) {
        this.productStore = props.productStore;
        this.init();
    }
    init = () => {
        this.cartProductList = new Map();
    };
    onClickAdToCart = (productId) => {};
    onRemoveCartItem = () => {};
    getProductDetailsById = () => {};
    @computed
    get totalCartAmount() {
        return 1250;
    }
    @computed
    get noOfProductsInCart() {
        return 5;
    }
    clearCart = () => {};
}
export default CartStore;
