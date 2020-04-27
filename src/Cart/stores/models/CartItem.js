import { observable } from "mobx";

class CartItemModel {
    cartItemId;
    productId;
    @observable quantity;
    constructor(cartItem) {
        this.cartItemId = cartItem.cartItemId;
        this.productId = cartItem.productId;
        this.quantity = cartItem.quantity;
    }
    incrementQuantity = () => {
        this.quantity++;
    };
    decrementQuantity = () => {
        this.quantity--;
    };
}
export default CartItemModel;
