import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FiShoppingCart } from "react-icons/fi";

import { SIZES } from "../../constants/ProductsConstants";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";

import Header from "../Header";
import ProductList from "../ProductsList";
import ProductSort from "../ProductSort";
import { SideBar } from "../SideBar";

import {
    RootDiv,
    CartIcon,
    Itemscount,
    Container,
    ProductListWrapper,
} from "./styledComponents";

@inject("authStore", "productStore", "cartStore")
@observer
class EcommerceHomePage extends Component {
    get productStore() {
        return this.props.productStore;
    }

    get authStore() {
        return this.props.authStore;
    }
    get cartStore() {
        return this.props.cartStore;
    }
    componentDidMount() {
        this.doNetworkCalls();
    }
    doNetworkCalls = () => {
        this.productStore.getProductList();
    };
    onClickAddTOCart = (productId) => {
        const { onClickAdToCart } = this.cartStore;
        onClickAdToCart(productId);
    };
    renderSuccessUi = observer(() => {
        const { products } = this.productStore;

        return (
            <ProductList
                products={products}
                onClickAddTOCart={this.onClickAddTOCart}
            />
        );
    });

    onClickSignOut = () => {
        this.authStore.userSignOut();
    };
    onSelectSize = (selectedSize) => {
        const { onSelectSize } = this.productStore;
        onSelectSize(selectedSize);
    };

    render() {
        const {
            getProductListAPIStatus,
            getProductListAPIError,
            onChangeSortBy,
            totalNoOfProductsDisplayed,
        } = this.productStore;
        return (
            <RootDiv>
                <Header onClickSignOut={this.onClickSignOut} />
                <CartIcon>
                    <FiShoppingCart className="absolute" />
                    <Itemscount>58</Itemscount>
                </CartIcon>
                <Container>
                    <SideBar sizes={SIZES} onSelectSize={this.onSelectSize} />
                    <ProductListWrapper>
                        <ProductSort
                            onChangeSortBy={onChangeSortBy}
                            totalNoOfProductsDisplayed={
                                totalNoOfProductsDisplayed
                            }
                        />

                        <LoadingWrapperWithFailure
                            apiStatus={getProductListAPIStatus}
                            apiError={getProductListAPIError}
                            onRetryClick={this.doNetworkCalls}
                            renderSuccessUI={this.renderSuccessUi}
                        />
                    </ProductListWrapper>
                </Container>
            </RootDiv>
        );
    }
}

export { EcommerceHomePage };
