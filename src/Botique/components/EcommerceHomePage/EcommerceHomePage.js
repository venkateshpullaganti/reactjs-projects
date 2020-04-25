import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { FiShoppingCart } from "react-icons/fi";

import Header from "../Header";

import { RootDiv, CartIcon, Itemscount } from "./styledComponents";

@inject("authStore", "productStore")
@observer
class EcommerceHomePage extends Component {
    get authStore() {
        return this.props.authStore;
    }
    onClickSignOut = () => {
        this.authStore.userSignOut();
    };
    render() {
        return (
            <RootDiv>
                <Header onClickSignOut={this.onClickSignOut} />
                <CartIcon>
                    <FiShoppingCart className="absolute" />
                    <Itemscount>58</Itemscount>
                </CartIcon>
            </RootDiv>
        );
    }
}

export { EcommerceHomePage };
