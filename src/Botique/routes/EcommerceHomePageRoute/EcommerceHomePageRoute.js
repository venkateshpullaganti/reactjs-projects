import React, { Component } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import cookieconsent from "cookieconsent";

import EcommerceHomePage from "../../components/EcommerceHomePage";
import { SIZES } from "../../constants/ProductsConstants";
import ProductList from "../../components/ProductsList";

import { CookieConsentDiv, Root } from "./styledComponents";

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
class EcommerceHomePageRoute extends Component {
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

        const {
            shouldShowCart,
            onClickSignOut,
            onChangeSearchText,
            onClickCart,
            onSelectSize,
            doNetworkCalls,
            renderSuccessUi,
            toggleCart,
            cartStore,
        } = this;

        const ecommerceProps = {
            getProductListAPIStatus,
            getProductListAPIError,
            onChangeSortBy,
            totalNoOfProductsDisplayed,
            noOfProductsInCart,
            shouldShowCart,
            cartStore,
            SIZES,
            onClickSignOut,
            onChangeSearchText,
            onClickCart,
            onSelectSize,
            doNetworkCalls,
            renderSuccessUi,
            toggleCart,
        };

        return (
            <Root>
                <EcommerceHomePage {...ecommerceProps} />
                <CookieConsentDiv />
            </Root>
        );
    }
}

export { EcommerceHomePageRoute };
