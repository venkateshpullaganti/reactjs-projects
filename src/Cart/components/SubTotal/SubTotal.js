import React, { Component } from "react";

import { SubTotalContainer, Amount, Text } from "./styledComponents";
import withFormatCurrency from "../../../common/hocs/withFormatCurrency";

class SubTotal extends Component {
   render() {
      const { formattedAmount } = this.props;
      return (
         <SubTotalContainer>
            <Text>SUBTOTAL</Text>
            <Amount>:{formattedAmount}</Amount>
         </SubTotalContainer>
      );
   }
}

export default withFormatCurrency(SubTotal);
