import React, { Component } from "react";

import { CartItem } from "../CartItem";

import { ProductList, AddItemsTxt } from "./styledComponents";
import { observer } from "mobx-react";

class CartList extends Component {
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
        return <AddItemsTxt>Add some products to your cart.</AddItemsTxt>;
    };

    render() {
        return <ProductList>{this.renderCartItems()}</ProductList>;
    }
}

export default CartList;
