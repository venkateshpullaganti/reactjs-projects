import React, { Component } from "react";

import { CartItem } from "../CartItem";

import { ProductList } from "./styledComponents";
import { observer } from "mobx-react";

class CartList extends Component {
    // constructor(props) {
    //     super(props);

    // }
    renderCartItems = () => {
        const {
            productsInCart,
            getProductDetailsById,
            onRemoveCartItem,
        } = this.props;

        if (productsInCart.size) {
            let products = [];
            productsInCart.forEach((cartItem, key) => {
                products.push(
                    <CartItem
                        key={Math.random()}
                        cartItem={cartItem}
                        getProductDetailsById={getProductDetailsById}
                        onRemoveCartItem={onRemoveCartItem}
                    />
                );
            });
            return products;
        }
        return null;
    };

    render() {
        return <ProductList>{this.renderCartItems()}</ProductList>;
    }
}

export default CartList;
