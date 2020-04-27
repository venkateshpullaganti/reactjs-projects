import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { observer } from "mobx-react";

import { CartList } from "../CartList";
import { SubTotal } from "../SubTotal";
import CheckOutButton from "../CheckOutButton";

import {
    CartContainer,
    CloseBtn,
    CartIcon,
    Itemscount,
    CartTxt,
    CartHeader,
    Footer,
} from "./styledComponents";
@observer
class Cart extends Component {
    render() {
        const { show, toggleCart } = this.props;
        const {
            noOfProductsInCart,
            totalCartAmount,
            getProductDetailsById,
            onRemoveCartItem,
            cartProductList,
            clearCart,
        } = this.props.cartStore;

        return (
            <CartContainer show={show}>
                <CloseBtn show={show} onClick={toggleCart}>
                    X
                </CloseBtn>
                <CartHeader>
                    <CartIcon onClick={this.onClickCart}>
                        <FiShoppingCart className="absolute" />
                        <Itemscount>{noOfProductsInCart}</Itemscount>
                    </CartIcon>
                    <CartTxt>Cart</CartTxt>
                </CartHeader>
                <CartList
                    productsInCart={cartProductList}
                    onRemoveCartItem={onRemoveCartItem}
                    getProductDetailsById={getProductDetailsById}
                />
                <Footer>
                    <SubTotal totalCartAmount={totalCartAmount} />
                    <CheckOutButton OnCheckOut={clearCart} />
                </Footer>
            </CartContainer>
        );
    }
}

export default Cart;
