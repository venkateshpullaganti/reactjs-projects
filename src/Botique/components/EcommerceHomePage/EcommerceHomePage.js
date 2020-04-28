import React, { Component } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { FiShoppingCart } from "react-icons/fi";
import { withRouter } from "react-router-dom";

import { getAccessToken } from "../../../utils/StorageUtils";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
import { SignInForm_PATH } from "../../../Authentication/constants/RouteConstants";
import Cart from "../../../Cart/components/Cart";

import { SIZES } from "../../constants/ProductsConstants";

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
    @observable shouldShowCart;
    constructor(props) {
        super(props);
        this.shouldShowCart = false;
    }

    componentDidMount() {
        if (getAccessToken() === undefined) {
            return this.redirectToLoginPage();
        }
        this.doNetworkCalls();
    }

    get productStore() {
        return this.props.productStore;
    }

    get authStore() {
        return this.props.authStore;
    }
    get cartStore() {
        return this.props.cartStore;
    }
    doNetworkCalls = () => {
        this.productStore.getProductList();
    };
    onClickAddTOCart = (productId) => {
        const { onClickAddToCart } = this.cartStore;

        onClickAddToCart(productId);
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
    onClickCart = () => {
        this.shouldShowCart = !this.shouldShowCart;
    };
    toggleCart = () => {
        this.shouldShowCart = !this.shouldShowCart;
    };
    redirectToLoginPage = () => {
        const { history } = this.props;
        history.replace(SignInForm_PATH);
    };

    render() {
        const {
            getProductListAPIStatus,
            getProductListAPIError,
            onChangeSortBy,
            totalNoOfProductsDisplayed,
        } = this.productStore;
        const { noOfProductsInCart } = this.cartStore;

        return (
            <RootDiv>
                <Header onClickSignOut={this.onClickSignOut} />
                <CartIcon
                    data-testid="cart-open-button"
                    onClick={this.onClickCart}
                >
                    <FiShoppingCart className="absolute" />
                    <Itemscount>{noOfProductsInCart}</Itemscount>
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
                <Cart
                    show={this.shouldShowCart}
                    toggleCart={this.toggleCart}
                    cartStore={this.cartStore}
                />
            </RootDiv>
        );
    }
}

export default withRouter(EcommerceHomePage);
