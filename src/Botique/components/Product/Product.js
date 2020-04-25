import React, { Component } from "react";
import { observer } from "mobx-react";

import {
    ProductContainer,
    Image,
    Title,
    Price,
    FreeShipping,
    ImageContainer,
    Bar,
} from "./styledComponents";

@observer
class Product extends Component {
    constructor(props) {
        super(props);
        console.log(props.product.price);
    }
    render() {
        const { image, price, title, isFreeShipping } = this.props.product;

        return (
            <ProductContainer>
                <ImageContainer>
                    <Image alt={title} src={image} />
                </ImageContainer>
                <Title>{title}</Title>
                <Bar />
                <Price>{price}</Price>
            </ProductContainer>
        );
    }
}

export { Product };
