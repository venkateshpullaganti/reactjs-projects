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
    AddToCartBtn,
    CurrencyFormat,
    PriceContainer,
    Installment,
} from "./styledComponents";

@observer
class Product extends Component {
    onClickAddTOCart = () => {
        const { onClickAddTOCart } = this.props;
        const { productId } = this.props.product;

        onClickAddTOCart(productId);
    };
    render() {
        const {
            imageURL,
            price,
            title,
            isFreeShipping,
            currencyFormat,
            installments,
        } = this.props.product;
        const pricePerinstallment = parseFloat(price / installments).toFixed(2);
        return (
            <ProductContainer>
                <FreeShipping isFreeShipping={isFreeShipping}>
                    FreeShipping
                </FreeShipping>
                <ImageContainer>
                    <Image alt={title} src={imageURL} />
                </ImageContainer>
                <Title>{title}</Title>
                <Bar />
                <PriceContainer>
                    <CurrencyFormat>{currencyFormat}</CurrencyFormat>
                    <Price>{price}</Price>
                </PriceContainer>
                <Installment>
                    or {installments}x{pricePerinstallment}
                </Installment>
                <AddToCartBtn onClick={this.onClickAddTOCart}>
                    Add To Cart
                </AddToCartBtn>
            </ProductContainer>
        );
    }
}

export { Product };
