import React, { Component } from "react";

import { CheckOutBtn } from "./styledComponents";

class CheckOutButton extends Component {
    OnCheckOut = () => {
        const { OnCheckOut } = this.props;
        OnCheckOut();
        alert(
            "Thankyou for Shopping. Your products will not be delivered due to COVID-19. Stay Home,Stay Safe. 😉"
        );
    };
    render() {
        const { noOfProductsInCart } = this.props;
        return (
            <CheckOutBtn
                isCursorAllowed={noOfProductsInCart ? true : false}
                onClick={this.OnCheckOut}
            >
                CHECKOUT
            </CheckOutBtn>
        );
    }
}

export default CheckOutButton;
