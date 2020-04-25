import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";

import Product from "../Product";

import { ProductListStyled } from "./styledComponents";

@observer
class ProductsList extends Component {
    get productStore() {
        return this.props.productStore;
    }
    componentDidMount() {
        this.doNetworkCalls();
    }
    doNetworkCalls = () => {
        this.productStore.getProductList();
    };
    renderProducts = () => {
        const { sortedAndFilteredProducts } = this.productStore;

        return sortedAndFilteredProducts.map((eachProduct) => (
            <Product key={Math.random()} product={eachProduct} />
        ));
    };
    renderSuccessUi = observer(() => {
        return <ProductListStyled>{this.renderProducts()}</ProductListStyled>;
    });
    render() {
        const {
            getProductListAPIStatus,
            getProductListAPIError,
        } = this.productStore;
        return (
            <LoadingWrapperWithFailure
                apiStatus={getProductListAPIStatus}
                apiError={getProductListAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderSuccessUi}
            />
        );
    }
}

export { ProductsList };
