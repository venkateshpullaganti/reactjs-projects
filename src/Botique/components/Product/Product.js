import React, { Component } from "react";
import { observer } from "mobx-react";
import { toast, Slide, Flip, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import tickMark from "../../../common/assets/tickmark.png";

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
    ToastComponent,
    SuccessMsg,
} from "./styledComponents";

toast.configure({
    autoClose: 2500,
    draggable: true,
    hideProgressBar: true,
    pauseOnHover: false,
    closeButton: false,
    transition: Slide,
});

const Toaster = () => (
    <ToastComponent>
        <img width={32} alt="success" src={tickMark} />
        <SuccessMsg>Product added to your cart! </SuccessMsg>
    </ToastComponent>
);

@observer
class Product extends Component {
    onClickAddTOCart = () => {
        const { onClickAddTOCart } = this.props;
        const { productId } = this.props.product;
        toast.warn(<Toaster />, {
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
                    Free shipping
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
                    Add to cart
                </AddToCartBtn>
            </ProductContainer>
        );
    }
}

export { Product };
