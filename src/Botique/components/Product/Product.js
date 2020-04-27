import React, { Component } from "react";
import { observer } from "mobx-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

toast.configure({
    autoClose: 1000,
    draggable: true,
});

@observer
class Product extends Component {
    onClickAddTOCart = () => {
        const { onClickAddTOCart } = this.props;
        const { productId } = this.props.product;
        toast.success("Product successfully added to cart !", {
            position: toast.POSITION.BOTTOM_CENTER,
        });
        onClickAddTOCart(productId);
    };
    render() {
        const {
            imageURL,
            price,
            title,
            isFreeShipping,
            currencyFormat,
            installmentsCount,
        } = this.props.product;
        const pricePerinstallment = parseFloat(
            price / installmentsCount
        ).toFixed(2);

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
                    {installmentsCount
                        ? `or ${installmentsCount} x ${pricePerinstallment}`
                        : "No Installments for this product."}
                </Installment>
                <AddToCartBtn onClick={this.onClickAddTOCart}>
                    Add To Cart
                </AddToCartBtn>
            </ProductContainer>
        );
    }
}

export { Product };
