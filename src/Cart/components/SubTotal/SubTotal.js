import React, { Component } from "react";

import { SubTotalContainer, Amount, Text } from "./styledComponents";

class SubTotal extends Component {
    render() {
        const { totalCartAmount } = this.props;
        return (
            <SubTotalContainer>
                <Text>SUBTOTAL</Text>
                <Amount>{totalCartAmount}</Amount>
            </SubTotalContainer>
        );
    }
}

export default SubTotal;
