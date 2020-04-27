import React, { Component } from "react";
import { observer } from "mobx-react";

import Product from "../Product";

import { ProductListStyled } from "./styledComponents";

@observer
class ProductsList extends Component {
    get products() {
        return this.props.products;
    }

    renderProducts = () => {
        const { onClickAddTOCart } = this.props;
        return this.products.map((eachProduct) => {
            return (
                <Product
                    key={eachProduct.productId}
                    product={eachProduct}
                    onClickAddTOCart={onClickAddTOCart}
                />
            );
        });
    };

    render() {
        return <ProductListStyled>{this.renderProducts()}</ProductListStyled>;
    }
}

export { ProductsList };
