import React, { Component } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { FiShoppingCart } from "react-icons/fi";
import cookieconsent from "cookieconsent";

import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
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
    CookieConsentDiv,
} from "./styledComponents";

window.cookieconsent.initialise({
    container: { CookieConsentDiv },
    palette: {
        popup: {
            background: "#252e39",
        },
        button: { background: "#14a7d0" },
    },
    revokable: true,
    onStatusChange: function (status) {
        console.log(this.hasConsented() ? "enable cookies" : "disable cookies");
    },
    theme: "classic",
    type: "opt-out",
    position: "bottom-left",
    static: false,
    content: {
        header: "Cookies used on the website!",
        message: "We use cookies to ensure you get best userexperience.",
        dismiss: "Got it!",
        allow: "Allow cookies",
        deny: "Decline",
        link: "Learn more",
        href: "https://www.cookiesandyou.com",
        close: "&#x274c;",
        policy: "Cookie Policy",
        target: "www.google.com",
    },
});

@inject("authStore", "productStore", "cartStore")
@observer
class EcommerceHomePage extends Component {
    @observable shouldShowCart;
    constructor(props) {
        super(props);
        this.shouldShowCart = false;
    }

    componentDidMount() {
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

    onChangeSearchText = (searchText) => {
        const { onChangeSearchText } = this.productStore;
        onChangeSearchText(searchText);
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
                <Header
                    onClickSignOut={this.onClickSignOut}
                    onChangeSearchText={this.onChangeSearchText}
                />
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
                <CookieConsentDiv />
            </RootDiv>
        );
    }
}

export default EcommerceHomePage;
