import React, { Component } from "react";

import {
    ProductContainer,
    ImageContainer,
    Image,
    Details,
    Title,
    PrintStyle,
    Quantity,
    PriceContainer,
    RemoveBtn,
    Price,
    CurrencyFormat,
} from "./styledComponents";
import { observer } from "mobx-react";

@observer
class CartItem extends Component {
    // constructor(props) {
    //     super(props);
    // }
    onRemoveCartItem = () => {
        const { onRemoveCartItem } = this.props;
        const { cartItemId } = this.props.cartItem;

        onRemoveCartItem(cartItemId);
    };

    render() {
        const { quantity, productId } = this.props.cartItem;
        const { getProductDetailsById } = this.props;
        const productDetails = getProductDetailsById(productId);
        const {
            imageURL,
            price,
            title,
            printStyle,
            currencyFormat,
        } = productDetails;

        return (
            <ProductContainer>
                <ImageContainer>
                    <Image src={imageURL} />
                </ImageContainer>
                <Details>
                    <Title>{title}</Title>
                    <PrintStyle>{printStyle}</PrintStyle>
                    <Quantity>Quantity: {quantity}</Quantity>
                </Details>
                <PriceContainer>
                    <RemoveBtn onClick={this.onRemoveCartItem}>x</RemoveBtn>
                    <Price>
                        <CurrencyFormat>{currencyFormat}: </CurrencyFormat>
                        {price}
                    </Price>
                </PriceContainer>
            </ProductContainer>
        );
    }
}

export default CartItem;
