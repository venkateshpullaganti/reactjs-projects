import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FiShoppingCart } from "react-icons/fi";

import { SIZES } from "../../constants/ProductsConstants";

import Header from "../Header";
import ProductList from "../ProductsList";
import { SideBar } from "../SideBar";

import { RootDiv, CartIcon, Itemscount, Container } from "./styledComponents";

@inject("authStore", "productStore")
@observer
class EcommerceHomePage extends Component {
    get authStore() {
        return this.props.authStore;
    }
    get productStore() {
        return this.props.productStore;
    }

    onClickSignOut = () => {
        this.authStore.userSignOut();
    };
    onSelectSize = (selectedSize) => {
        const { onSelectSize } = this.productStore;
        onSelectSize(selectedSize);
    };

    render() {
        return (
            <RootDiv>
                <Header onClickSignOut={this.onClickSignOut} />
                <CartIcon>
                    <FiShoppingCart className="absolute" />
                    <Itemscount>58</Itemscount>
                </CartIcon>
                <Container>
                    <SideBar sizes={SIZES} onSelectSize={this.onSelectSize} />
                    <ProductList productStore={this.productStore} />
                </Container>
            </RootDiv>
        );
    }
}

export { EcommerceHomePage };
