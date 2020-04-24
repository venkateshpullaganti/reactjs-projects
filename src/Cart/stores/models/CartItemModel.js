class CartItemModel {
    cartItemId;
    productId;
    quantity;
    constructor(cartItem) {
        this.cartItemId = cartItem.id;
        this.productId = cartItem.productId;
        this.quantity = cartItem.quantity;
    }
    incrementQuantity = () => {
        this.quantity++;
    };
}
export default CartItemModel;
